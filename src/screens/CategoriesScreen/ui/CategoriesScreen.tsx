import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { ArrowLeft, Search } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

interface CategoryItemProps {
  title: string;
  icon: React.ReactNode;
  onPress?: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  icon,
  onPress,
}) => (
  <TouchableOpacity style={styles.categoryItem} onPress={onPress}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.categoryTitle}>{title}</Text>
  </TouchableOpacity>
);

const CategoriesScreen = () => {
  const navigation = useNavigation();

  const categories = [
    {
      id: "1",
      title: "3D Design",
      icon: <Text style={styles.categoryIcon}>⬚</Text>,
    },
    {
      id: "2",
      title: "Graphic Design",
      icon: <Text style={styles.categoryIcon}>✏️</Text>,
    },
    {
      id: "3",
      title: "Web Development",
      icon: <Text style={styles.categoryIcon}>💻</Text>,
    },
    {
      id: "4",
      title: "SEO & Marketing",
      icon: <Text style={styles.categoryIcon}>📊</Text>,
    },
    {
      id: "5",
      title: "Finance & Accounting",
      icon: <Text style={styles.categoryIcon}>🏦</Text>,
    },
    {
      id: "6",
      title: "Personal Development",
      icon: <Text style={styles.categoryIcon}>📈</Text>,
    },
    {
      id: "7",
      title: "Office Productivity",
      icon: <Text style={styles.categoryIcon}>⚙️</Text>,
    },
    {
      id: "8",
      title: "HR Management",
      icon: <Text style={styles.categoryIcon}>👥</Text>,
    },
  ];

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
        <Text style={styles.headerTitle}>All Category</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for.."
            placeholderTextColor="#A0A0A0"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Search size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories Grid */}
      <ScrollView style={styles.content}>
        <View style={styles.categoriesGrid}>
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              title={category.title}
              icon={category.icon}
              onPress={() => {
                // Handle category selection
              }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#17252A",
  },
  searchContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
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
  searchInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#17252A",
  },
  searchButton: {
    width: 50,
    height: 50,
    backgroundColor: "#4169E1",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  categoryItem: {
    width: "45%",
    margin: "2.5%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  categoryIcon: {
    fontSize: 32,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#17252A",
    textAlign: "center",
  },
});

export default CategoriesScreen;
