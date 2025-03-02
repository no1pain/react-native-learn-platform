import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.headerIcons}>
          <View style={styles.signalIcon} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon} />
        </View>
      </View>

      <Text style={styles.greeting}>Hi ALEX</Text>
      <Text style={styles.question}>
        What Would you like to learn Today? Search Below.
      </Text>

      <TouchableOpacity style={styles.notificationButton}>
        <Image source={require("")} style={styles.notificationIcon} />
      </TouchableOpacity>

      <View style={styles.searchBar}>
        <Image source={require("")} style={styles.searchIcon} />
        <TextInput placeholder="Search for.." style={styles.searchInput} />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require("")} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.specialOffer}>
        <Text style={styles.offerTitle}>25% OFF*</Text>
        <Text style={styles.offerSubtitle}>Today's Special</Text>
        <Text style={styles.offerDescription}>
          Get a Discount for Every Course Order only Valid for Today.!
        </Text>
        <View style={styles.indicator}>
          <View style={styles.activeDot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8", // Light background color
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 30,
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  signalIcon: {
    width: 20,
    height: 15,
    backgroundColor: "black", // Replace with actual signal icon
    marginRight: 5,
  },
  wifiIcon: {
    width: 20,
    height: 15,
    backgroundColor: "black", // Replace with actual wifi icon
    marginRight: 5,
  },
  batteryIcon: {
    width: 20,
    height: 15,
    backgroundColor: "black", // Replace with actual battery icon
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  notificationButton: {
    position: "absolute",
    top: 100, // Adjust as needed
    right: 20,
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  filterButton: {
    backgroundColor: "#E0E8F0",
    padding: 10,
    borderRadius: 8,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  specialOffer: {
    backgroundColor: "#2869C2", // Blue background
    borderRadius: 15,
    padding: 20,
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  offerSubtitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  offerDescription: {
    fontSize: 16,
    color: "white",
    marginBottom: 15,
  },
  indicator: {
    flexDirection: "row",
    justifyContent: "center",
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "yellow",
    marginHorizontal: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 5,
  },
});

export default HomePage;
