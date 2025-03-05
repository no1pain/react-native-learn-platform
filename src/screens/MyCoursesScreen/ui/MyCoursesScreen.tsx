import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { ArrowLeft, Search, Check } from "lucide-react-native";
import { useUserCourses, UserCourse } from "@/context/UserCoursesContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ScreenWithFooter from "@/shared/ui/ScreenWithFooter";

type RootStackParamList = {
  CourseDetail: { courseId: string };
};

const MyCoursesScreen = () => {
  const [activeTab, setActiveTab] = useState<"Completed" | "Ongoing">(
    "Ongoing"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const { userCourses, removeCourse } = useUserCourses();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const filteredCourses = userCourses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTab =
      activeTab === "Completed" ? course.completed : !course.completed;
    return matchesSearch && matchesTab;
  });

  const handleRemoveCourse = (courseId: string) => {
    removeCourse(courseId);
  };

  const handleCoursePress = (courseId: string) => {
    console.log("MyCoursesScreen - Navigating to course with ID:", courseId);
    navigation.navigate("CourseDetail", { courseId });
  };

  const renderCourseItem = ({ item }: { item: UserCourse }) => (
    <TouchableOpacity
      style={styles.courseCard}
      onPress={() => handleCoursePress(item.id)}
    >
      <Image source={{ uri: item.image }} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseCategory}>{item.category}</Text>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <View style={styles.courseRating}>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
          <Text style={styles.durationText}> | {item.duration}</Text>
        </View>
        <TouchableOpacity
          style={styles.viewCertificateButton}
          onPress={(e) => {
            e.stopPropagation(); // Prevent triggering the parent TouchableOpacity
            console.log("View certificate");
          }}
        >
          <Text style={styles.viewCertificateText}>VIEW CERTIFICATE</Text>
        </TouchableOpacity>
      </View>
      {item.completed && (
        <View style={styles.completedBadge}>
          <Check size={20} color="#FFFFFF" />
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <ScreenWithFooter activeScreen="MyCourses">
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Courses</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for ..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Search size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Ongoing" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("Ongoing")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Ongoing" && styles.activeTabText,
            ]}
          >
            Ongoing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Completed" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("Completed")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Completed" && styles.activeTabText,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredCourses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.coursesList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No {activeTab.toLowerCase()} courses found
            </Text>
          </View>
        }
      />
    </ScreenWithFooter>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F5F5F7",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    margin: 16,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: "#4169E1",
    borderRadius: 30,
    padding: 12,
    margin: 4,
  },
  tabContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "#E8EEF4",
    borderRadius: 30,
    marginHorizontal: 5,
  },
  activeTabButton: {
    backgroundColor: "#3E7A57",
  },
  tabText: {
    fontWeight: "600",
    color: "#666",
  },
  activeTabText: {
    color: "#FFFFFF",
  },
  coursesList: {
    padding: 16,
  },
  courseCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginBottom: 16,
    overflow: "hidden",
    position: "relative",
  },
  courseImage: {
    width: 100,
    height: 120,
    backgroundColor: "#000",
  },
  courseInfo: {
    flex: 1,
    padding: 12,
  },
  courseCategory: {
    color: "#FF6B00",
    fontSize: 12,
    marginBottom: 4,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  courseRating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  ratingText: {
    fontSize: 14,
    color: "#666",
  },
  durationText: {
    fontSize: 14,
    color: "#666",
  },
  viewCertificateButton: {
    alignSelf: "flex-start",
  },
  viewCertificateText: {
    color: "#3E7A57",
    fontWeight: "600",
    fontSize: 12,
  },
  completedBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#3E7A57",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});

export default MyCoursesScreen;
