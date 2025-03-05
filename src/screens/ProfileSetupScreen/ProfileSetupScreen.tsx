import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { supabase } from "@/lib/supabase";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ArrowLeft,
  Calendar,
  Mail,
  ChevronDown,
  Camera,
  User,
} from "lucide-react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const ProfileSetupScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [loading, setLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    nick_name: "",
    date_of_birth: new Date(),
    email: "",
    phone: "(+1) 724-848-1225",
    gender: "",
    avatar_url: "",
  });

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) throw error;

      if (!session) {
        Alert.alert("Error", "Please sign in to continue");
        navigation.navigate("Login");
        return;
      }

      // Pre-fill email if available
      if (session.user?.email) {
        setFormData((prev) => ({
          ...prev,
          email: session.user.email || prev.email,
        }));
      }
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to check session");
      navigation.navigate("Login");
    }
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setFormData((prev) => ({ ...prev, date_of_birth: selectedDate }));
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) throw sessionError;

      if (!session) {
        Alert.alert("Error", "Please sign in to continue");
        navigation.navigate("Login");
        return;
      }

      const { error } = await supabase.from("profiles").upsert({
        id: session.user.id,
        ...formData,
        updated_at: new Date(),
      });

      if (error) throw error;

      Alert.alert("Success", "Profile updated successfully");
      navigation.navigate("Home");
    } catch (error: any) {
      Alert.alert("Error", error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fill Your Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <User size={60} color="#666" />
          </View>
          <TouchableOpacity style={styles.cameraButton}>
            <Camera size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={formData.full_name}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, full_name: text }))
              }
            />
          </View>

          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="Nick Name"
              value={formData.nick_name}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, nick_name: text }))
              }
            />
          </View>

          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowDatePicker(true)}
          >
            <View style={styles.inputContent}>
              <Calendar size={20} color="#666" />
              <Text style={styles.inputText}>
                {formData.date_of_birth.toLocaleDateString()}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.inputGroup}>
            <View style={styles.input}>
              <View style={styles.inputContent}>
                <Mail size={20} color="#666" />
                <TextInput
                  style={styles.inputText}
                  placeholder="Email"
                  value={formData.email}
                  onChangeText={(text) =>
                    setFormData((prev) => ({ ...prev, email: text }))
                  }
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.input}>
              <View style={styles.inputContent}>
                <Text style={styles.phonePrefix}>(+1)</Text>
                <TextInput
                  style={styles.inputText}
                  value={formData.phone}
                  onChangeText={(text) =>
                    setFormData((prev) => ({ ...prev, phone: text }))
                  }
                  keyboardType="phone-pad"
                />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.input}>
            <View style={styles.inputContent}>
              <Text
                style={[
                  styles.inputText,
                  !formData.gender && styles.placeholder,
                ]}
              >
                {formData.gender || "Gender"}
              </Text>
              <ChevronDown size={20} color="#666" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.continueButton, loading && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
          <ArrowLeft
            size={20}
            color="#FFF"
            style={{ transform: [{ rotate: "180deg" }] }}
          />
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={formData.date_of_birth}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
  },
  content: {
    flex: 1,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 32,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraButton: {
    position: "absolute",
    right: "35%",
    bottom: 0,
    backgroundColor: "#4169E1",
    padding: 8,
    borderRadius: 20,
  },
  form: {
    paddingHorizontal: 20,
    gap: 16,
  },
  inputGroup: {
    gap: 8,
  },
  input: {
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
  },
  placeholder: {
    color: "#666666",
  },
  phonePrefix: {
    fontSize: 16,
    color: "#000000",
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  continueButton: {
    backgroundColor: "#4169E1",
    borderRadius: 30,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonDisabled: {
    opacity: 0.7,
  },
});

export default ProfileSetupScreen;
