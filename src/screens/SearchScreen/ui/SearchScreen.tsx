import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { ArrowLeft, Search as SearchIcon, X } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RootStackParamList = {
  Courses: { searchQuery?: string } | undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Courses">;

interface RecentSearch {
  id: string;
  term: string;
}

const SearchScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);

  // Load recent searches on mount
  useEffect(() => {
    loadRecentSearches();
  }, []);

  const loadRecentSearches = async () => {
    try {
      const searches = await AsyncStorage.getItem("recentSearches");
      if (searches) {
        setRecentSearches(JSON.parse(searches));
      }
    } catch (error) {
      console.error("Error loading recent searches:", error);
    }
  };

  const saveRecentSearch = async (term: string) => {
    try {
      const newSearch: RecentSearch = {
        id: Date.now().toString(),
        term,
      };

      // Remove duplicates and keep only last 10 searches
      const updatedSearches = [
        newSearch,
        ...recentSearches.filter((search) => search.term !== term),
      ].slice(0, 10);

      await AsyncStorage.setItem(
        "recentSearches",
        JSON.stringify(updatedSearches)
      );
      setRecentSearches(updatedSearches);
    } catch (error) {
      console.error("Error saving recent search:", error);
    }
  };

  const handleSearch = (term: string = searchTerm) => {
    if (term.trim()) {
      saveRecentSearch(term.trim());
      navigation.navigate("Courses", { searchQuery: term.trim() });
    }
  };

  const removeRecentSearch = async (id: string) => {
    try {
      const updatedSearches = recentSearches.filter(
        (search) => search.id !== id
      );
      await AsyncStorage.setItem(
        "recentSearches",
        JSON.stringify(updatedSearches)
      );
      setRecentSearches(updatedSearches);
    } catch (error) {
      console.error("Error removing recent search:", error);
    }
  };

  const clearAllSearches = async () => {
    try {
      await AsyncStorage.removeItem("recentSearches");
      setRecentSearches([]);
    } catch (error) {
      console.error("Error clearing recent searches:", error);
    }
  };

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
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Graphic Design"
            placeholderTextColor="#A0A0A0"
            value={searchTerm}
            onChangeText={setSearchTerm}
            onSubmitEditing={() => handleSearch()}
            autoFocus
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => handleSearch()}
          >
            <SearchIcon size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Searches */}
      <View style={styles.recentSearchesContainer}>
        <View style={styles.recentHeader}>
          <Text style={styles.recentTitle}>Recent Search</Text>
          <TouchableOpacity onPress={clearAllSearches}>
            <Text style={styles.seeAllButton}>SEE ALL</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={recentSearches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.recentSearchItem}
              onPress={() => handleSearch(item.term)}
            >
              <Text style={styles.recentSearchText}>{item.term}</Text>
              <TouchableOpacity
                onPress={() => removeRecentSearch(item.id)}
                style={styles.removeButton}
              >
                <X size={16} color="#666666" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
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
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingLeft: 16,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: "#17252A",
  },
  searchButton: {
    width: 48,
    height: 48,
    backgroundColor: "#4169E1",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  recentSearchesContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#17252A",
  },
  seeAllButton: {
    fontSize: 14,
    color: "#4169E1",
    fontWeight: "600",
  },
  recentSearchItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  recentSearchText: {
    fontSize: 14,
    color: "#666666",
  },
  removeButton: {
    padding: 4,
  },
});

export default SearchScreen;
