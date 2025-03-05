import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Bell } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Notifications: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface HeaderProps {
  unreadNotificationsCount: number;
}

const Header: React.FC<HeaderProps> = ({ unreadNotificationsCount }) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Hi, user.name</Text>
        <Text style={styles.subtitle}>
          What Would you like to learn Today?{"\n"}
          Search Below.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.notificationButton}
        onPress={() => {
          navigation.navigate("Notifications");
        }}
      >
        <Bell size={24} color="#2B7A78" />
        {unreadNotificationsCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unreadNotificationsCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#FF4444",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Header;
