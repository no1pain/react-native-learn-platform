import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SpecialOffer = () => {
  return (
    <View style={styles.specialOffer}>
      <Text style={styles.offerTitle}>25% OFF*</Text>
      <Text style={styles.offerSubtitle}>Today's Special</Text>
      <Text style={styles.offerDescription}>
        Get a Discount for Every Course Order only Valid for Today.!
      </Text>
      <View style={styles.indicator}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  specialOffer: {
    backgroundColor: "#4169E1",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 24,
  },
  offerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  offerSubtitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  offerDescription: {
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 0.9,
    marginBottom: 16,
  },
  indicator: {
    flexDirection: "row",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
  },
  activeDot: {
    opacity: 1,
    width: 24,
  },
});

export default SpecialOffer;
