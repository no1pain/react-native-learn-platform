import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { ImageIcon } from "lucide-react-native";
import mentorsData from "@/data/mentors.json";

interface MentorItemProps {
  name: string;
  image: string;
  onPress?: () => void;
}

const MentorItem: React.FC<MentorItemProps> = ({ name, image, onPress }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  return (
    <TouchableOpacity style={styles.mentorItem} onPress={onPress}>
      <View style={styles.imageContainer}>
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#4169E1" />
          </View>
        )}
        {hasError && (
          <View style={styles.errorContainer}>
            <ImageIcon size={24} color="#666666" />
          </View>
        )}
        <Image
          source={{ uri: image }}
          style={styles.mentorImage}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      </View>
      <Text style={styles.mentorName}>{name}</Text>
    </TouchableOpacity>
  );
};

const MentorList: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {mentorsData.mentors.map((mentor) => (
          <MentorItem
            key={mentor.id}
            name={mentor.name}
            image={mentor.image}
            onPress={() => console.log("Mentor pressed:", mentor.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 24,
  },
  mentorItem: {
    alignItems: "center",
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    backgroundColor: "#F5F5F5",
    marginBottom: 8,
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  errorContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  mentorImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  mentorName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#17252A",
    textAlign: "center",
  },
});

export default MentorList;
