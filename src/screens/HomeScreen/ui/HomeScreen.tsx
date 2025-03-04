import React, { useMemo } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import notificationsData from "../../../data/notifications.json";
import CardList from "../../../components/CardList/CardList";
import Header from "../../../components/Header/Header";
import SearchBar from "../../../components/SearchBar/SearchBar";
import SpecialOffer from "../../../components/SpecialOffer/SpecialOffer";

const HomeScreen = () => {
  const unreadNotificationsCount = useMemo(() => {
    return notificationsData.notifications.filter((n) => !n.isRead).length;
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Header unreadNotificationsCount={unreadNotificationsCount} />
        <SearchBar />
        <SpecialOffer />
        <CardList />
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
});

export default HomeScreen;
