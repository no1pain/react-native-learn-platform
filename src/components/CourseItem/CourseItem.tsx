import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import {
  ArrowLeft,
  MessageCircle,
  Bookmark,
  Users,
  BookOpen,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  likes: number;
  date: string;
}

interface CourseItemProps {
  title: string;
  category: string;
  rating: number;
  lessons: number;
  duration: string;
  price: string;
  image: string;
  description: string;
  instructor: {
    name: string;
    title: string;
    avatar: string;
    rating: number;
    students: number;
    courses: number;
  };
  features: string[];
  reviews: Review[];
}

const CourseItem: React.FC<CourseItemProps> = ({
  title,
  category,
  rating,
  lessons,
  duration,
  price,
  image,
  description,
  instructor,
  features,
  reviews,
}) => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<"about" | "curriculum">("about");
  const [isSaved, setIsSaved] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        {/* Course Preview Image with Overlay Buttons */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.courseImage} />
          <SafeAreaView style={styles.overlayButtons}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.goBack()}
            >
              <ArrowLeft size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setIsSaved(!isSaved)}
            >
              <Bookmark
                size={24}
                color="#FFFFFF"
                fill={isSaved ? "#FFFFFF" : "none"}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </View>

        {/* Course Info */}
        <View style={styles.courseInfo}>
          <View style={styles.categoryRating}>
            <Text style={styles.category}>{category}</Text>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>⭐ {rating}</Text>
            </View>
          </View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.metadata}>
            <Text style={styles.metadataText}>📚 {lessons} Class</Text>
            <Text style={styles.metadataText}>⏰ {duration}</Text>
          </View>
          <Text style={styles.price}>{price}/-</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "about" && styles.activeTab]}
            onPress={() => setActiveTab("about")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "about" && styles.activeTabText,
              ]}
            >
              About
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "curriculum" && styles.activeTab]}
            onPress={() => setActiveTab("curriculum")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "curriculum" && styles.activeTabText,
              ]}
            >
              Curriculum
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        {activeTab === "about" ? (
          <View style={styles.content}>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity style={styles.readMore}>
              <Text style={styles.readMoreText}>Read More</Text>
            </TouchableOpacity>

            {/* Instructor */}
            <View style={styles.instructorSection}>
              <Text style={styles.sectionTitle}>Instructor</Text>
              <View style={styles.instructor}>
                <Image
                  source={{ uri: instructor.avatar }}
                  style={styles.instructorAvatar}
                />
                <View style={styles.instructorInfo}>
                  <Text style={styles.instructorName}>{instructor.name}</Text>
                  <Text style={styles.instructorTitle}>{instructor.title}</Text>
                  <View style={styles.instructorStats}>
                    <View style={styles.instructorStat}>
                      <Users size={16} color="#666666" />
                      <Text style={styles.instructorStatText}>
                        {instructor.students} Students
                      </Text>
                    </View>
                    <View style={styles.instructorStat}>
                      <BookOpen size={16} color="#666666" />
                      <Text style={styles.instructorStatText}>
                        {instructor.courses} Courses
                      </Text>
                    </View>
                    <View style={styles.instructorStat}>
                      <Text style={styles.instructorStatText}>
                        ⭐ {instructor.rating}
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.messageButton}>
                  <MessageCircle size={20} color="#4169E1" />
                </TouchableOpacity>
              </View>
            </View>

            {/* What You'll Get */}
            <View style={styles.featuresSection}>
              <Text style={styles.sectionTitle}>What You'll Get</Text>
              {features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>

            {/* Reviews */}
            <View style={styles.reviewsSection}>
              <View style={styles.reviewsHeader}>
                <Text style={styles.sectionTitle}>Reviews</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>SEE ALL</Text>
                </TouchableOpacity>
              </View>
              {reviews.map((review) => (
                <View key={review.id} style={styles.reviewItem}>
                  <Image
                    source={{ uri: review.user.avatar }}
                    style={styles.reviewerAvatar}
                  />
                  <View style={styles.reviewContent}>
                    <View style={styles.reviewHeader}>
                      <Text style={styles.reviewerName}>
                        {review.user.name}
                      </Text>
                      <View style={styles.reviewRating}>
                        <Text style={styles.reviewRatingText}>
                          ⭐ {review.rating}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.reviewText}>{review.comment}</Text>
                    <View style={styles.reviewFooter}>
                      <Text style={styles.reviewLikes}>❤️ {review.likes}</Text>
                      <Text style={styles.reviewDate}>{review.date}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.content}>
            {/* Curriculum content */}
            <Text style={styles.comingSoon}>
              Curriculum content coming soon...
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Enroll Button */}
      <View style={styles.enrollContainer}>
        <TouchableOpacity style={styles.enrollButton}>
          <Text style={styles.enrollButtonText}>Enroll Course - {price}/-</Text>
          <ArrowLeft
            size={20}
            color="#FFFFFF"
            style={{ transform: [{ rotate: "180deg" }] }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  imageContainer: {
    position: "relative",
    height: 300, // Increased height for better visual
  },
  courseImage: {
    width: "100%",
    height: "100%",
  },
  overlayButtons: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  courseInfo: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  categoryRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  category: {
    color: "#4169E1",
    fontSize: 14,
    fontWeight: "500",
  },
  rating: {
    backgroundColor: "#FFB800",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  ratingText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#17252A",
    marginBottom: 8,
  },
  metadata: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 8,
  },
  metadataText: {
    color: "#666666",
    fontSize: 14,
  },
  price: {
    fontSize: 24,
    fontWeight: "600",
    color: "#4169E1",
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  tab: {
    paddingVertical: 16,
    marginRight: 24,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#4169E1",
  },
  tabText: {
    fontSize: 16,
    color: "#666666",
  },
  activeTabText: {
    color: "#4169E1",
    fontWeight: "600",
  },
  content: {
    padding: 20,
  },
  description: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
  },
  readMore: {
    marginTop: 8,
  },
  readMoreText: {
    color: "#4169E1",
    fontSize: 14,
    fontWeight: "500",
  },
  instructorSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#17252A",
    marginBottom: 16,
  },
  instructor: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
  },
  instructorAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  instructorInfo: {
    flex: 1,
    marginLeft: 12,
  },
  instructorName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#17252A",
  },
  instructorTitle: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 8,
  },
  instructorStats: {
    flexDirection: "row",
    gap: 12,
  },
  instructorStat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  instructorStatText: {
    fontSize: 12,
    color: "#666666",
  },
  messageButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  featuresSection: {
    marginTop: 24,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: "#17252A",
    marginLeft: 12,
  },
  reviewsSection: {
    marginTop: 24,
  },
  reviewsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  seeAllText: {
    color: "#4169E1",
    fontSize: 14,
    fontWeight: "600",
  },
  reviewItem: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewContent: {
    flex: 1,
    marginLeft: 12,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#17252A",
  },
  reviewRating: {
    backgroundColor: "#FFB800",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  reviewRatingText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  reviewText: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 8,
  },
  reviewFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  reviewLikes: {
    fontSize: 12,
    color: "#666666",
  },
  reviewDate: {
    fontSize: 12,
    color: "#666666",
  },
  comingSoon: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginTop: 20,
  },
  enrollContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  enrollButton: {
    flexDirection: "row",
    backgroundColor: "#4169E1",
    padding: 16,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  enrollButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CourseItem;
