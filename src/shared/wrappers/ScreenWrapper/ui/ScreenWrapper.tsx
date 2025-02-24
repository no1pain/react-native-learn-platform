import React from "react";
import { View, StyleSheet } from "react-native";

const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});

export default ScreenWrapper;
