import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { ArrowLeft, Heart, LogOut, Check } from "lucide-react-native";
import ScreenWithFooter from "@/shared/ui/ScreenWithFooter";
import { useUserCourses, UserCourse } from "@/context/UserCoursesContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Fixed avatar URL
const AVATAR_URL = "https://randomuser.me/api/portraits/women/44.jpg";

type RootStackParamList = {
  CourseDetail: { courseId: string };
};

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState<"Courses" | "Ratings">("Courses");
  const { userCourses, removeCourse } = useUserCourses();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout = () => {
    // Implement logout functionality here
    console.log("Logout pressed");
  };

  const handleCoursePress = (courseId: string) => {
    // Log the courseId for debugging
    console.log("ProfileScreen - Navigating to course with ID:", courseId);
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

  const renderRatings = () => {
    return (
      <View style={styles.ratingsContainer}>
        <View style={styles.ratingItem}>
          <View style={styles.ratingHeader}>
            <Image
              style={styles.raterImage}
              source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            />
            <View style={styles.raterInfo}>
              <Text style={styles.raterName}>Mary</Text>
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingScore}>4.2</Text>
              </View>
            </View>
          </View>
          <Text style={styles.ratingText}>
            This course has been very useful. Mentor was well spoken totally
            loved it.
          </Text>
          <View style={styles.ratingFooter}>
            <View style={styles.likesContainer}>
              <Heart size={16} color="#FF5757" fill="#FF5757" />
              <Text style={styles.likesCount}>760</Text>
            </View>
            <Text style={styles.ratingDate}>2 Weeks Ago</Text>
          </View>
        </View>

        <View style={styles.ratingItem}>
          <View style={styles.ratingHeader}>
            <Image
              style={styles.raterImage}
              source={{
                uri: "https://randomuser.me/api/portraits/women/32.jpg",
              }}
            />
            <View style={styles.raterInfo}>
              <Text style={styles.raterName}>Natasha B. Lambert</Text>
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingScore}>4.8</Text>
              </View>
            </View>
          </View>
          <Text style={styles.ratingText}>
            This course has been very useful. Mentor was well spoken totally
            loved it.
          </Text>
          <View style={styles.ratingFooter}>
            <View style={styles.likesContainer}>
              <Heart size={16} color="#9E9E9E" />
              <Text style={styles.likesCount}>918</Text>
            </View>
            <Text style={styles.ratingDate}>2 Weeks Ago</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderCourses = () => {
    return (
      <View style={styles.coursesContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <LogOut size={24} color="#FF3B30" />
        </TouchableOpacity>

        {userCourses.length > 0 ? (
          <FlatList
            data={userCourses}
            renderItem={renderCourseItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.coursesList}
          />
        ) : (
          <Text style={styles.emptyText}>No courses available</Text>
        )}
      </View>
    );
  };

  return (
    <ScreenWithFooter activeScreen="Profile">
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>

          <Image style={styles.profileImage} source={{ uri: AVATAR_URL }} />

          <Text style={styles.name}>Mary Jones</Text>
          <Text style={styles.jobTitle}>Graphic Designer At Google</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{userCourses.length}</Text>
              <Text style={styles.statLabel}>Courses</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>15800</Text>
              <Text style={styles.statLabel}>Students</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>8750</Text>
              <Text style={styles.statLabel}>Ratings</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.messageButton}>
              <Text style={styles.messageButtonText}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>
            "But can one now do so much as they did in the past? Nor am I
            unaware that there is utility in history, not only pleasure."
          </Text>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "Courses" && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab("Courses")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Courses" && styles.activeTabText,
              ]}
            >
              Courses
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "Ratings" && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab("Ratings")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Ratings" && styles.activeTabText,
              ]}
            >
              Ratings
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "Courses" ? renderCourses() : renderRatings()}
      </ScrollView>
    </ScreenWithFooter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  followButton: {
    backgroundColor: "#F0F0F5",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  followButtonText: {
    color: "#000",
    fontWeight: "500",
  },
  messageButton: {
    backgroundColor: "#4169E1",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  messageButtonText: {
    color: "#FFF",
    fontWeight: "500",
  },
  quoteContainer: {
    backgroundColor: "#FFFFFF",
    margin: 15,
    padding: 20,
    borderRadius: 15,
  },
  quote: {
    fontStyle: "italic",
    textAlign: "center",
    color: "#666",
    lineHeight: 22,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    borderRadius: 15,
    overflow: "hidden",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  activeTabButton: {
    backgroundColor: "#F0F0F5",
  },
  tabText: {
    fontWeight: "500",
    color: "#666",
  },
  activeTabText: {
    color: "#000",
  },
  coursesContainer: {
    padding: 15,
    flex: 1,
  },
  coursesList: {
    paddingBottom: 20,
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
  ratingsContainer: {
    padding: 15,
  },
  ratingItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  ratingHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  raterImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  raterInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  raterName: {
    fontWeight: "bold",
  },
  ratingBadge: {
    backgroundColor: "#F0F0F5",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  ratingScore: {
    fontWeight: "bold",
    color: "#FF9500",
  },
  ratingFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likesCount: {
    marginLeft: 5,
    color: "#666",
  },
  ratingDate: {
    color: "#666",
    fontSize: 12,
  },
  logoutButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#F0F0F5",
  },
  emptyText: {
    color: "#666",
    marginTop: 20,
  },
});

export default ProfileScreen;
