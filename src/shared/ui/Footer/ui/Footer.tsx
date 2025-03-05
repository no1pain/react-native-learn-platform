import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Home,
  BookOpen,
  MessageCircle,
  Wallet,
  User,
} from "lucide-react-native";
import { moderateScale } from "@/shared/utils/scaling";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./FooterStyles";

interface FooterProps {
  activeScreen: string;
}

const Footer: React.FC<FooterProps> = ({ activeScreen }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Home
          size={moderateScale(24)}
          color={activeScreen === "Home" ? "#00B074" : "#9E9E9E"}
          strokeWidth={2}
        />
        <Text
          style={[
            styles.menuText,
            activeScreen === "Home" && styles.activeText,
          ]}
        >
          HOME
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("MyCourses")}
      >
        <BookOpen
          size={moderateScale(24)}
          color={activeScreen === "MyCourses" ? "#00B074" : "#9E9E9E"}
          strokeWidth={2}
        />
        <Text
          style={[
            styles.menuText,
            activeScreen === "MyCourses" && styles.activeText,
          ]}
        >
          MY COURSES
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Chats")}
      >
        <MessageCircle
          size={moderateScale(24)}
          color={activeScreen === "Chats" ? "#00B074" : "#9E9E9E"}
          strokeWidth={2}
        />
        <Text
          style={[
            styles.menuText,
            activeScreen === "Chats" && styles.activeText,
          ]}
        >
          INBOX
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Transaction")}
      >
        <Wallet
          size={moderateScale(24)}
          color={activeScreen === "Transaction" ? "#00B074" : "#9E9E9E"}
          strokeWidth={2}
        />
        <Text
          style={[
            styles.menuText,
            activeScreen === "Transaction" && styles.activeText,
          ]}
        >
          TRANSACTION
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Profile")}
      >
        <User
          size={moderateScale(24)}
          color={activeScreen === "Profile" ? "#00B074" : "#9E9E9E"}
          strokeWidth={2}
        />
        <Text
          style={[
            styles.menuText,
            activeScreen === "Profile" && styles.activeText,
          ]}
        >
          PROFILE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
