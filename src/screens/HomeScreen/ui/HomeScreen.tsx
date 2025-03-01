// HomeScreen.tsx
import Header from "@/shared/ui/Header/ui/Header";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./HomeScreenStyles"; // Import styles

const HomeScreen = () => {
  const navigation: any = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("isAuthenticated");
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>HomeScreen</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

// HomeScreenStyles.tsx (or HomeScreenStyles.ts)
import { StyleSheet } from "react-native";
