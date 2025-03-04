import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import CardItem from "../CardItem/CardItem";
import coursesData from "../../data/courses.json";

interface Course {
  id: string;
  title: string;
  category: string;
  categoryName: string;
  price: number;
  rating: number;
  students: number;
  image: string;
  isFavorite: boolean;
}

interface CardListProps {
  selectedCategory?: string;
}

const CardList: React.FC<CardListProps> = ({ selectedCategory = "all" }) => {
  const [courses, setCourses] = useState<Course[]>(coursesData.courses);

  const toggleFavorite = (courseId: string) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId
          ? { ...course, isFavorite: !course.isFavorite }
          : course
      )
    );
  };

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

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
          categoryName={course.categoryName}
          price={course.price}
          rating={course.rating}
          students={course.students}
          image={course.image}
          isFavorite={course.isFavorite}
          onPress={() => console.log("Course pressed:", course.id)}
          onFavoritePress={() => toggleFavorite(course.id)}
        />
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
    paddingBottom: 16,
  },
});

export default CardList;
