import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Icons from "lucide-react-native";

interface NotificationItemProps {
  title: string;
  description: string;
  icon: string;
  isRead: boolean;
  onPress?: () => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  description,
  icon,
  isRead,
  onPress,
}) => {
  const IconComponent =
    (Icons as any)[icon.charAt(0).toUpperCase() + icon.slice(1)] || Icons.Bell;

  return (
    <TouchableOpacity
      style={[styles.container, !isRead && styles.unread]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <IconComponent size={24} color="#4169E1" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 12,
    marginHorizontal: 20,
  },
  unread: {
    backgroundColor: "#F0F4FF",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E7F5F5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#17252A",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
  },
});

export default NotificationItem;
