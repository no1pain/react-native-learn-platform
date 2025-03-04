import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ChevronRight } from "lucide-react-native";

interface SectionHeaderProps {
  title: string;
  onSeeAllPress?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  onSeeAllPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.seeAllButton} onPress={onSeeAllPress}>
        <Text style={styles.seeAllText}>SEE ALL</Text>
        <ChevronRight size={20} color="#4169E1" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#17252A",
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4169E1",
  },
});

export default SectionHeader;
