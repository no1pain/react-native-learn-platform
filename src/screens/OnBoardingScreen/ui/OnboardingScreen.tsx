import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./OnboardingScreenStyles";

export const OnboardingScreen = ({ navigation }: { navigation: any }) => {
  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);

  const handleNext = (index: number) => {
    if (swiperRef && index < 2) {
      swiperRef.scrollBy(1); // Move to next slide
    } else {
      handleFinish(); // Last slide navigates to Login
    }
  };

  const handleFinish = async () => {
    await AsyncStorage.setItem("hasSeenIntro", "true");
    navigation.replace("Login"); // Navigate to Login Screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFinish} style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={(swiper) => setSwiperRef(swiper)}
        loop={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        <View style={styles.slide}>
          <Text style={styles.title}>Online Learning</Text>
          <Text style={styles.description}>
            We Provide Online Classes and Pre-Recorded Lectures!
          </Text>
          <TouchableOpacity
            onPress={() => handleNext(0)}
            style={styles.nextButton}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.slide}>
          <Text style={styles.title}>Expert Teachers</Text>
          <Text style={styles.description}>
            Learn from industry-leading experts in every subject.
          </Text>
          <TouchableOpacity
            onPress={() => handleNext(1)}
            style={styles.nextButton}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.slide}>
          <Text style={styles.title}>Flexible Learning</Text>
          <Text style={styles.description}>
            Study at your own pace, anytime, anywhere!
          </Text>
          <TouchableOpacity onPress={handleFinish} style={styles.nextButton}>
            <Text style={styles.nextText}>Go to Login</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    </View>
  );
};
