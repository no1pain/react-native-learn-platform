import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface CategoryItemProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
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

const styles = StyleSheet.create({
  categoryItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
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

export default CategoryItem;
