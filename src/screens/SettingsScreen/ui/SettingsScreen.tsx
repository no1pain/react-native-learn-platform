import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ScreenWithFooter from "@/shared/ui/ScreenWithFooter";
import { useAuth } from "@/shared/hooks/useAuth";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

const SettingsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { logout } = useAuth();

  // State for toggle switches
  const [specialOffers, setSpecialOffers] = useState(true);
  const [sound, setSound] = useState(true);
  const [vibrate, setVibrate] = useState(false);
  const [generalNotification, setGeneralNotification] = useState(true);
  const [promoDiscount, setPromoDiscount] = useState(false);
  const [paymentOptions, setPaymentOptions] = useState(true);
  const [appUpdate, setAppUpdate] = useState(true);
  const [newService, setNewService] = useState(false);
  const [newTips, setNewTips] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      // Navigation will be handled by the auth context
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <ScreenWithFooter activeScreen="Home">
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Special Offers</Text>
          <Switch
            value={specialOffers}
            onValueChange={setSpecialOffers}
            trackColor={{ false: "#E0E0E0", true: "#4169E1" }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Sound</Text>
          <Switch
            value={sound}
            onValueChange={setSound}
            trackColor={{ false: "#E0E0E0", true: "#4169E1" }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Vibrate</Text>
          <Switch
            value={vibrate}
            onValueChange={setVibrate}
            trackColor={{ false: "#E0E0E0", true: "#4169E1" }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>General Notification</Text>
          <Switch
            value={generalNotification}
            onValueChange={setGeneralNotification}
            trackColor={{ false: "#E0E0E0", true: "#4169E1" }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Promo & Discount</Text>
          <Switch
            value={promoDiscount}
            onValueChange={setPromoDiscount}
            trackColor={{ false: "#E0E0E0", true: "#4169E1" }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Payment Options</Text>
          <Switch
            value={paymentOptions}
            onValueChange={setPaymentOptions}
            trackColor={{ false: "#E0E0E0", true: "#4169E1" }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>App Update</Text>
          <Switch
            value={appUpdate}
            onValueChange={setAppUpdate}
            trackColor={{ false: "#E0E0E0", true: "#4169E1" }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>New Service Available</Text>
          <Switch
            value={newService}
            onValueChange={setNewService}
            trackColor={{ false: "#E0E0E0", true: "#4169E1" }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>New Tips Available</Text>
          <Switch
            value={newTips}
            onValueChange={setNewTips}
            trackColor={{ false: "#E0E0E0", true: "#4169E1" }}
            thumbColor="#FFFFFF"
          />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWithFooter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F5F5F7",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F5",
  },
  settingLabel: {
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#FF6B6B",
    marginHorizontal: 20,
    marginVertical: 30,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
