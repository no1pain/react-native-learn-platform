import React, { useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LogOut } from "lucide-react-native";
import notificationsData from "@/data/notifications.json";
import CardList from "@/components/CardList/CardList";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import SpecialOffer from "@/components/SpecialOffer/SpecialOffer";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import CategoryList from "@/components/CategoryList/CategoryList";
import MentorList from "@/components/MentorList/MentorList";
import { useAuth } from "@/shared/hooks/useAuth";
import ScreenWithFooter from "@/shared/ui/ScreenWithFooter";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Notifications: undefined;
  Categories: undefined;
  Mentors: undefined;
  Courses: undefined;
  CourseDetail: { courseId: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { logout } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const unreadNotificationsCount = useMemo(() => {
    return notificationsData.notifications.filter((n) => !n.isRead).length;
  }, []);

  const handleCoursePress = (courseId: string) => {
    navigation.navigate("CourseDetail", { courseId });
  };

  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          try {
            await logout();
          } catch (error) {
            console.error("Logout error:", error);
            Alert.alert("Error", "Failed to logout. Please try again.");
          }
        },
      },
    ]);
  };

  return (
    <ScreenWithFooter activeScreen="Home">
      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.headerContainer}>
          <Header unreadNotificationsCount={unreadNotificationsCount} />
        </View>

        <SearchBar />
        <SpecialOffer />
        <SectionHeader
          title="Categories"
          onSeeAllPress={() => navigation.navigate("Categories")}
        />
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <SectionHeader
          title="Popular Courses"
          onSeeAllPress={() => navigation.navigate("Courses")}
        />
        <CardList
          selectedCategory={
            selectedCategory === "all" ? undefined : selectedCategory
          }
          onCoursePress={handleCoursePress}
        />
        <SectionHeader
          title="Top Mentor"
          onSeeAllPress={() => navigation.navigate("Mentors")}
        />
        <MentorList />
      </ScrollView>
    </ScreenWithFooter>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 16,
    backgroundColor: "#F7F9FC",
  },
  logoutButton: {
    padding: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    lineHeight: 22,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
});

export default HomeScreen;
