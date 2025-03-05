import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { ArrowLeft, Search, ImageIcon } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import mentorsData from "../../../data/mentors.json";

interface MentorItemProps {
  image: string;
  name: string;
  specialty: string;
  onPress?: () => void;
}

const MentorItem: React.FC<MentorItemProps> = ({
  image,
  name,
  specialty,
  onPress,
}) => {
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
      <View style={styles.mentorInfo}>
        <Text style={styles.mentorName}>{name}</Text>
        <Text style={styles.mentorSpecialty}>{specialty}</Text>
      </View>
    </TouchableOpacity>
  );
};

const MentorsScreen = () => {
  const navigation = useNavigation();

  const mentors = [
    {
      id: "1",
      name: "Jiya Shetty",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      specialty: "3D Design",
    },
    {
      id: "2",
      name: "Donald S",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      specialty: "Arts & Humanities",
    },
    {
      id: "3",
      name: "Aman",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      specialty: "Personal Development",
    },
    {
      id: "4",
      name: "Vrushab. M",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      specialty: "SEO & Marketing",
    },
    {
      id: "5",
      name: "Robert William",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      specialty: "Office Productivity",
    },
    {
      id: "6",
      name: "Soman",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      specialty: "Web Development",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} color="#17252A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Top Mentors</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Search size={24} color="#17252A" />
        </TouchableOpacity>
      </View>

      {/* Mentors List */}
      <ScrollView style={styles.content}>
        {mentors.map((mentor) => (
          <MentorItem
            key={mentor.id}
            image={mentor.image}
            name={mentor.name}
            specialty={mentor.specialty}
            onPress={() => console.log("Mentor pressed:", mentor.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#17252A",
  },
  searchButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  mentorItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#F5F5F5",
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
  mentorInfo: {
    marginLeft: 16,
    flex: 1,
  },
  mentorName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#17252A",
    marginBottom: 4,
  },
  mentorSpecialty: {
    fontSize: 14,
    color: "#666666",
  },
});

export default MentorsScreen;
