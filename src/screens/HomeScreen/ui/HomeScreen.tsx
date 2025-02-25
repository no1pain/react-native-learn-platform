import Header from "@/shared/ui/Header/ui/Header";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Text style={{ marginTop: 100, marginLeft: 150 }}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
