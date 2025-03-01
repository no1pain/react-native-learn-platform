import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./OnboardingScreenStyles";

type SwiperRef = {
  scrollBy: (index: number) => void;
};

export const OnboardingScreen = ({ navigation }: { navigation: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleNext = () => {
    if (currentIndex < 2) {
      if (swiperRef.current) {
        swiperRef.current.scrollBy(1);
      }
    } else {
      handleFinish();
    }
  };

  const handleFinish = async () => {
    await AsyncStorage.setItem("hasSeenIntro", "true");
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFinish} style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef as any}
        loop={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        onIndexChanged={(index) => setCurrentIndex(index)}
        showsButtons={false}
      >
        <View style={styles.slide}>
          <Text style={styles.title}>Online Learning</Text>
          <Text style={styles.description}>
            We Provide Online Classes and Pre-Recorded Lectures!
          </Text>
          <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.slide}>
          <Text style={styles.title}>Expert Teachers</Text>
          <Text style={styles.description}>
            Learn from industry-leading experts in every subject.
          </Text>
          <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
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
