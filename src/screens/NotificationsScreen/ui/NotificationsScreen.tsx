import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

interface NotificationItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isRead: boolean;
}

// Notification item component
const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  description,
  icon: Icon,
  isRead,
}) => (
  <TouchableOpacity
    style={[styles.notificationItem, !isRead && styles.notificationItemUnread]}
  >
    <View style={styles.notificationIcon}>{Icon}</View>
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationDescription}>{description}</Text>
    </View>
  </TouchableOpacity>
);

const NotificationsScreen = () => {
  const navigation = useNavigation();

  const notifications = {
    today: [
      {
        id: "1",
        title: "New Category Course.!",
        description: "New the 3D Design Course is Availa..",
        icon: (
          <View style={[styles.iconBox, { backgroundColor: "#fff" }]}>
            <Text>⬚</Text>
          </View>
        ),
        isRead: false,
      },
      {
        id: "2",
        title: "New Category Course.!",
        description: "New the 3D Design Course is Availa...",
        icon: (
          <View style={[styles.iconBox, { backgroundColor: "#4169E1" }]}>
            <Text style={{ color: "#fff" }}>⚀</Text>
          </View>
        ),
        isRead: false,
      },
      {
        id: "3",
        title: "Today's Special Offers",
        description: "You Have made a Coure Payment.",
        icon: (
          <View style={[styles.iconBox, { backgroundColor: "#fff" }]}>
            <Text>🎟️</Text>
          </View>
        ),
        isRead: false,
      },
    ],
    yesterday: [
      {
        id: "4",
        title: "Credit Card Connected.!",
        description: "Credit Card has been Linked.!",
        icon: (
          <View style={[styles.iconBox, { backgroundColor: "#fff" }]}>
            <Text>💳</Text>
          </View>
        ),
        isRead: true,
      },
    ],
    older: [
      {
        id: "5",
        title: "Account Setup Successful.!",
        description: "Your Account has been Created.",
        icon: (
          <View style={[styles.iconBox, { backgroundColor: "#fff" }]}>
            <Text>👤</Text>
          </View>
        ),
        isRead: true,
      },
    ],
  };

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
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.content}>
        {/* Today's notifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today</Text>
          {notifications.today.map((notification) => (
            <NotificationItem key={notification.id} {...notification} />
          ))}
        </View>

        {/* Yesterday's notifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Yesterday</Text>
          {notifications.yesterday.map((notification) => (
            <NotificationItem key={notification.id} {...notification} />
          ))}
        </View>

        {/* Older notifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nov 20, 2022</Text>
          {notifications.older.map((notification) => (
            <NotificationItem key={notification.id} {...notification} />
          ))}
        </View>
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
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#17252A",
  },
  content: {
    flex: 1,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#17252A",
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationItemUnread: {
    backgroundColor: "#F8F9FE",
  },
  notificationIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#17252A",
    marginBottom: 4,
  },
  notificationDescription: {
    fontSize: 14,
    color: "#666666",
  },
});

export default NotificationsScreen;
