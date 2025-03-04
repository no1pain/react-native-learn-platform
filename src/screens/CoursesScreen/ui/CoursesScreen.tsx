import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ArrowLeft, Search } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./CoursesScreenStyles";
import categoriesData from "@/data/categories.json";
import coursesData from "@/data/courses.json";
import CourseCard from "@/components/CourseCard/CourseCard";
import CategoryItem from "@/components/CategoryItem/CategoryItem";

const CoursesScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { categories } = categoriesData;
  const { courses } = coursesData;

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
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} color="#17252A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Popular Courses</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Search size={24} color="#17252A" />
        </TouchableOpacity>
      </View>

      <View style={styles.categoriesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              title={category.title}
              isActive={selectedCategory === category.id}
              onPress={() => setSelectedCategory(category.id)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Courses */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.coursesContent}
      >
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            category={course.category}
            title={course.title}
            price={course.price}
            rating={course.rating}
            students={course.students}
            image={course.image}
            isSaved={course.isSaved}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoursesScreen;
