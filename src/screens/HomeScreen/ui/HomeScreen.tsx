import React, { useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import notificationsData from "@/data/notifications.json";
import CardList from "@/components/CardList/CardList";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import SpecialOffer from "@/components/SpecialOffer/SpecialOffer";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import CategoryList from "@/components/CategoryList/CategoryList";
import MentorList from "@/components/MentorList/MentorList";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Notifications: undefined;
  Categories: undefined;
  Mentors: undefined;
  Courses: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const unreadNotificationsCount = useMemo(() => {
    return notificationsData.notifications.filter((n) => !n.isRead).length;
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Header unreadNotificationsCount={unreadNotificationsCount} />
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
        />
        <SectionHeader
          title="Top Mentor"
          onSeeAllPress={() => navigation.navigate("Mentors")}
        />
        <MentorList />
      </ScrollView>
    </SafeAreaView>
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
});

export default HomeScreen;
