import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import CardItem from "@/components/CardItem/CardItem";
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
        <CardItem
          key={course.id}
          title={course.title}
          categoryName={course.category}
          price={parseInt(course.price)}
          rating={course.rating}
          students={course.students}
          image={course.image}
          isFavorite={course.isSaved}
          onPress={() => console.log("Course pressed:", course.id)}
          onFavoritePress={() => toggleFavorite(course.id)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
});

export default CardList;
