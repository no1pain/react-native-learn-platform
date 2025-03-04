import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  Box,
  Palette as PaletteIcon,
  PenTool as PenToolIcon,
  Code as CodeIcon,
  Briefcase as BriefcaseIcon,
  TrendingUp as TrendingUpIcon,
  Camera as CameraIcon,
  Music as MusicIcon,
  Database as DatabaseIcon,
  Globe as GlobeIcon,
} from "lucide-react-native";

interface CategoryItemProps {
  title: string;
  isActive?: boolean;
  onPress?: () => void;
  icon?: React.ReactNode;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  isActive,
  onPress,
  icon,
}) => (
  <TouchableOpacity
    style={[styles.categoryItem, isActive && styles.categoryItemActive]}
    onPress={onPress}
  >
    {icon && <View style={styles.iconContainer}>{icon}</View>}
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
  const categories = [
    {
      id: "all",
      title: "All Courses",
      icon: (
        <DatabaseIcon
          size={24}
          color={selectedCategory === "all" ? "#4169E1" : "#CCCCCC"}
        />
      ),
    },
    {
      id: "3d-design",
      title: "3D Design",
      icon: (
        <Box
          size={24}
          color={selectedCategory === "3d-design" ? "#4169E1" : "#CCCCCC"}
        />
      ),
    },
    {
      id: "arts-humanities",
      title: "Arts & Humanities",
      icon: (
        <PaletteIcon
          size={24}
          color={selectedCategory === "arts-humanities" ? "#4169E1" : "#CCCCCC"}
        />
      ),
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      icon: (
        <PenToolIcon
          size={24}
          color={selectedCategory === "graphic-design" ? "#4169E1" : "#CCCCCC"}
        />
      ),
    },
    {
      id: "programming",
      title: "Programming",
      icon: (
        <CodeIcon
          size={24}
          color={selectedCategory === "programming" ? "#4169E1" : "#CCCCCC"}
        />
      ),
    },
    {
      id: "business",
      title: "Business",
      icon: (
        <BriefcaseIcon
          size={24}
          color={selectedCategory === "business" ? "#4169E1" : "#CCCCCC"}
        />
      ),
    },
    {
      id: "marketing",
      title: "Marketing",
      icon: (
        <TrendingUpIcon
          size={24}
          color={selectedCategory === "marketing" ? "#4169E1" : "#CCCCCC"}
        />
      ),
    },
    {
      id: "photography",
      title: "Photography",
      icon: (
        <CameraIcon
          size={24}
          color={selectedCategory === "photography" ? "#4169E1" : "#CCCCCC"}
        />
      ),
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          icon={category.icon}
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
    gap: 12,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryItemActive: {
    backgroundColor: "#F0F8FF",
    borderColor: "#4169E1",
    borderWidth: 1,
  },
  iconContainer: {
    marginRight: 8,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#CCCCCC",
  },
  categoryTitleActive: {
    color: "#4169E1",
  },
});

export default CategoryList;
