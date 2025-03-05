import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const offers = [
  {
    title: "25% OFF*",
    subtitle: "Today's Special",
    description: "Get a Discount for Every Course Order only Valid for Today!",
    backgroundColor: "#4169E1",
  },
  {
    title: "FREE TRIAL",
    subtitle: "Premium Access",
    description:
      "Try any course free for 7 days with full access to all features",
    backgroundColor: "#2B7A78",
  },
  {
    title: "BUNDLE DEAL",
    subtitle: "Save Big",
    description: "Buy 2 courses and get 1 free! Limited time offer",
    backgroundColor: "#FF6B6B",
  },
];

const SpecialOffer = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={5}
        showsPagination={true}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        paginationStyle={styles.pagination}
      >
        {offers.map((offer, index) => (
          <View
            key={index}
            style={[
              styles.specialOffer,
              { backgroundColor: offer.backgroundColor },
            ]}
          >
            <Text style={styles.offerTitle}>{offer.title}</Text>
            <Text style={styles.offerSubtitle}>{offer.subtitle}</Text>
            <Text style={styles.offerDescription}>{offer.description}</Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    marginBottom: 24,
  },
  specialOffer: {
    flex: 1,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
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
  pagination: {
    bottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 24,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 4,
  },
});

export default SpecialOffer;
