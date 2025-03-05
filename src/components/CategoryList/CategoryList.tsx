import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import categoriesData from "@/data/categories.json";

interface CategoryItemProps {
  title: string;
  isActive?: boolean;
  onPress?: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  isActive,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.categoryItem, isActive && styles.categoryItemActive]}
    onPress={onPress}
  >
    <Text
      style={[styles.categoryTitle, isActive && styles.categoryTitleActive]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

interface CategoryListProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const { categories } = categoriesData;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      snapToAlignment="start"
      decelerationRate="fast"
    >
      <CategoryItem
        key="all"
        title="All Courses"
        isActive={selectedCategory === "all"}
        onPress={() => onSelectCategory("all")}
      />
      {categories
        .filter((category) => category.title !== "All")
        .map((category) => (
          <CategoryItem
            key={category.id}
            title={category.title}
            isActive={selectedCategory === category.id}
            onPress={() => onSelectCategory(category.id)}
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
    paddingRight: 40,
    gap: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  categoryItemActive: {
    backgroundColor: "#E7F5F5",
  },
  categoryTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#666666",
    lineHeight: 16,
  },
  categoryTitleActive: {
    color: "#2B7A78",
  },
});

export default CategoryList;
