import Header from "@/shared/ui/Header/ui/Header";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useAuth } from "@/shared/hooks/useAuth";
import { styles } from "./HomeScreenStyles";

const HomeScreen = () => {
  const navigation: any = useNavigation();
  const { logout } = useAuth();

  const handleLogout = async () => {
    navigation.replace("LoginMain");
    await logout();
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
