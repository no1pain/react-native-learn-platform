import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./OnboardingScreenStyles";

export const OnboardingScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App!</Text>
      <Text style={styles.description}>
        We're glad to have you here. Let's get started.
      </Text>
      <Button title="Get Started" onPress={() => navigation.replace("Home")} />
    </View>
  );
};
