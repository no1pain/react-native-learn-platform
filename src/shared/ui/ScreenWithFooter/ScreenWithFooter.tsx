import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Footer from "../Footer/ui/Footer";

interface ScreenWithFooterProps {
  children: React.ReactNode;
  activeScreen: string;
}

const ScreenWithFooter: React.FC<ScreenWithFooterProps> = ({
  children,
  activeScreen,
}) => {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>{children}</View>
        <Footer activeScreen={activeScreen} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  content: {
    flex: 1,
  },
});

export default ScreenWithFooter;
