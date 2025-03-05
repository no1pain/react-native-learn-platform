import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { Star, Bookmark, Image as ImageIcon } from "lucide-react-native";

interface CardItemProps {
  title: string;
  categoryName: string;
  price: number;
  rating: number;
  students: number;
  image: string;
  isFavorite: boolean;
  onPress?: () => void;
  onFavoritePress?: () => void;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  categoryName,
  price,
  rating,
  students,
  image,
  isFavorite,
  onPress,
  onFavoritePress,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#2B7A78" />
          </View>
        )}
        {hasError && (
          <View style={styles.errorContainer}>
            <ImageIcon size={32} color="#666666" />
            <Text style={styles.errorText}>Image not available</Text>
          </View>
        )}
        <Image
          source={{ uri: image }}
          style={styles.image}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={onFavoritePress}
        >
          <Bookmark
            size={20}
            color={isFavorite ? "#2B7A78" : "#FFFFFF"}
            fill={isFavorite ? "#2B7A78" : "none"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.category}>{categoryName}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View style={styles.details}>
          <Text style={styles.price}>${price}</Text>
          <View style={styles.ratingContainer}>
            <Star size={16} color="#FFD700" fill="#FFD700" />
            <Text style={styles.rating}>{rating}</Text>
          </View>
          <Text style={styles.students}>{students} Std</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 160,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
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
  errorText: {
    marginTop: 8,
    color: "#666666",
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  favoriteButton: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    padding: 8,
  },
  content: {
    padding: 16,
  },
  category: {
    fontSize: 14,
    color: "#FF6B6B",
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#17252A",
    marginBottom: 12,
    lineHeight: 24,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4169E1",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rating: {
    fontSize: 14,
    color: "#666666",
    marginLeft: 4,
  },
  students: {
    fontSize: 14,
    color: "#666666",
  },
});

export default CardItem;
