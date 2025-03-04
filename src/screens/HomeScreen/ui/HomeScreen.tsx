import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import { Search, Bell, Settings } from "lucide-react-native";
import * as Icons from "lucide-react-native";
import categoriesData from "../../../data/categories.json";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("arts-humanities");

  // Get the icon component by name
  const getIconByName = (name: string) => {
    const IconComponent = (Icons as any)[
      name.charAt(0).toUpperCase() + name.slice(1)
    ];
    return IconComponent || Icons.Circle;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <StatusBar barStyle="dark-content" />

        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, ALEX</Text>
            <Text style={styles.subtitle}>
              What Would you like to learn Today?{"\n"}
              Search Below.
            </Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color="#2B7A78" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#A0A0A0" />
            <TextInput
              placeholder="Search for.."
              style={styles.searchInput}
              placeholderTextColor="#A0A0A0"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Settings size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Special Offer Card */}
        <View style={styles.specialOffer}>
          <Text style={styles.offerTitle}>25% OFF*</Text>
          <Text style={styles.offerSubtitle}>Today's Special</Text>
          <Text style={styles.offerDescription}>
            Get a Discount for Every Course Order only Valid for Today.!
          </Text>
          <View style={styles.indicator}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Categories Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>SEE ALL</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
        >
          {categoriesData.categories.map((category) => {
            const IconComponent = getIconByName(category.icon);
            const isActive = category.id === selectedCategory;
            return (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryChip,
                  isActive
                    ? styles.categoryChipActive
                    : styles.categoryChipInactive,
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <IconComponent
                  size={16}
                  color={isActive ? "#FFFFFF" : "#666666"}
                  style={styles.categoryIcon}
                />
                <Text
                  style={
                    isActive
                      ? styles.categoryTextActive
                      : styles.categoryTextInactive
                  }
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Popular Courses Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Courses</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>SEE ALL</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.coursesScroll}
        >
          <TouchableOpacity
            style={[styles.categoryChip, styles.categoryChipActive]}
          >
            <Text style={styles.categoryTextActive}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryChip, styles.categoryChipInactive]}
          >
            <Text style={styles.categoryTextInactive}>Graphic Design</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryChip, styles.categoryChipInactive]}
          >
            <Text style={styles.categoryTextInactive}>3D Design</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryChip, styles.categoryChipInactive]}
          >
            <Text style={styles.categoryTextInactive}>Arts & Humanities</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#17252A",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    lineHeight: 22,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E7F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#333",
  },
  filterButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#2B7A78",
    alignItems: "center",
    justifyContent: "center",
  },
  specialOffer: {
    backgroundColor: "#4169E1",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 24,
  },
  offerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  offerSubtitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  offerDescription: {
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 0.9,
    marginBottom: 16,
  },
  indicator: {
    flexDirection: "row",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
  },
  activeDot: {
    opacity: 1,
    width: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#17252A",
  },
  seeAll: {
    fontSize: 14,
    color: "#4169E1",
    fontWeight: "600",
  },
  categoriesScroll: {
    paddingLeft: 20,
    marginBottom: 24,
  },
  coursesScroll: {
    paddingLeft: 20,
    marginBottom: 24,
  },
  categoryChip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  categoryChipActive: {
    backgroundColor: "#2B7A78",
  },
  categoryChipInactive: {
    backgroundColor: "#FFFFFF",
  },
  categoryTextActive: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  categoryTextInactive: {
    color: "#666666",
    fontSize: 14,
    fontWeight: "500",
  },
  categoryIcon: {
    marginRight: 8,
  },
});

export default HomeScreen;
