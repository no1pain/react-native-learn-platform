import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Bookmark } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  CourseDetail: { courseId: string };
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "CourseDetail"
>;

interface CourseCardProps {
  id: string;
  category: string;
  title: string;
  price: string;
  rating: number;
  students: number;
  image: string;
  isSaved?: boolean;
  onToggleFavorite?: () => void;
  onCoursePress?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  category,
  title,
  price,
  rating,
  students,
  image,
  isSaved,
  onToggleFavorite,
  onCoursePress,
}) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    if (onCoursePress) {
      onCoursePress();
    } else {
      navigation.navigate("CourseDetail", { courseId: id });
    }
  };

  return (
    <TouchableOpacity style={styles.courseCard} onPress={handlePress}>
      <Image source={{ uri: image }} style={styles.courseImage} />
      <View style={styles.courseContent}>
        <Text style={styles.courseCategory}>{category}</Text>
        <Text style={styles.courseTitle}>{title}</Text>
        <Text style={styles.coursePrice}>${price}</Text>
        <View style={styles.courseStats}>
          <View style={styles.ratingContainer}>
            <Text style={styles.starIcon}>⭐</Text>
            <Text style={styles.rating}>{rating}</Text>
          </View>
          <Text style={styles.divider}>|</Text>
          <Text style={styles.students}>{students} Std</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.bookmarkButton}
        onPress={onToggleFavorite}
      >
        <Bookmark
          size={20}
          color={isSaved ? "#2B7A78" : "#CCCCCC"}
          fill={isSaved ? "#2B7A78" : "none"}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  courseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    width: "100%",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  courseImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  courseContent: {
    padding: 16,
  },
  courseCategory: {
    fontSize: 14,
    color: "#FF6B6B",
    marginBottom: 4,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#17252A",
    marginBottom: 8,
  },
  coursePrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4169E1",
    marginBottom: 8,
  },
  courseStats: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  starIcon: {
    fontSize: 16,
  },
  rating: {
    fontSize: 14,
    color: "#666666",
  },
  divider: {
    color: "#CCCCCC",
  },
  students: {
    fontSize: 14,
    color: "#666666",
  },
  bookmarkButton: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    padding: 8,
  },
});

export default CourseCard;
