import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ArrowLeft, Search } from "lucide-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./CoursesScreenStyles";
import categoriesData from "@/data/categories.json";
import coursesData from "@/data/courses.json";
import CourseCard from "@/components/CourseCard/CourseCard";
import CategoryItem from "@/components/CategoryItem/CategoryItem";

type RootStackParamList = {
  Search: undefined;
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Search">;

interface RouteParams {
  searchQuery?: string;
}

const CoursesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const params = route.params as RouteParams;

  const [selectedCategory, setSelectedCategory] = useState("all");
  const { categories } = categoriesData;
  const { courses } = coursesData;

  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("Home");
    }
  };

  // Reset category when search query changes
  useEffect(() => {
    if (params?.searchQuery) {
      setSelectedCategory("all");
    }
  }, [params?.searchQuery]);

  const getFilteredCourses = () => {
    let filtered = courses;

    // Apply search filter if there's a search query
    if (params?.searchQuery) {
      const searchTerm = params.searchQuery.toLowerCase();
      filtered = filtered.filter((course) => {
        const titleMatch = course.title.toLowerCase().includes(searchTerm);
        const categoryMatch = course.category
          .toLowerCase()
          .includes(searchTerm);
        return titleMatch || categoryMatch;
      });
    }

    // Apply category filter if a category is selected
    if (selectedCategory !== "all") {
      filtered = filtered.filter((course) => {
        const selectedCategoryData = categories.find(
          (cat) => cat.id === selectedCategory
        );
        return (
          selectedCategoryData && course.category === selectedCategoryData.title
        );
      });
    }

    return filtered;
  };

  const filteredCourses = getFilteredCourses();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <ArrowLeft size={24} color="#17252A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {params?.searchQuery ? "Search Results" : "Popular Courses"}
        </Text>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate("Search")}
        >
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
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              category={course.category}
              title={course.title}
              price={course.price}
              rating={course.rating}
              students={course.students}
              image={course.image}
              isSaved={course.isSaved}
            />
          ))
        ) : (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No courses found</Text>
            <Text style={styles.noResultsSubtext}>
              Try adjusting your search or category filter
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoursesScreen;
