import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import CourseCard from "@/components/CourseCard/CourseCard";
import coursesData from "@/data/courses.json";
import categoriesData from "@/data/categories.json";

interface Course {
  id: string;
  title: string;
  category: string;
  price: string;
  rating: number;
  students: number;
  image: string;
  isSaved: boolean;
}

interface CardListProps {
  selectedCategory?: string;
}

const CardList: React.FC<CardListProps> = ({ selectedCategory = "all" }) => {
  const [courses, setCourses] = useState<Course[]>(coursesData.courses);
  const { categories } = categoriesData;

  const toggleFavorite = (courseId: string) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId
          ? { ...course, isSaved: !course.isSaved }
          : course
      )
    );
  };

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => {
          const selectedCategoryData = categories.find(
            (cat) => cat.id === selectedCategory
          );
          return (
            selectedCategoryData &&
            course.category === selectedCategoryData.title
          );
        });

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {filteredCourses.map((course) => (
        <View key={course.id} style={styles.cardWrapper}>
          <CourseCard
            id={course.id}
            title={course.title}
            category={course.category}
            price={course.price}
            rating={course.rating}
            students={course.students}
            image={course.image}
            isSaved={course.isSaved}
            onToggleFavorite={() => toggleFavorite(course.id)}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  cardWrapper: {
    marginRight: 16,
  },
});

export default CardList;
