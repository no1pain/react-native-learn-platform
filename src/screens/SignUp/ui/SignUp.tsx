import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { ArrowRight, Eye, EyeOff, Mail, Lock } from "lucide-react-native";
import styles from "./SignUpStyles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/shared/hooks/useAuth";
import { signUpWithEmail } from "@/lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = () => {
  const navigation: any = useNavigation();
  const { setIsAuthenticated } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!termsAccepted) {
      Alert.alert("Error", "Please accept the terms and conditions");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await signUpWithEmail(email, password);
      if (error) throw error;

      // Store the session token
      if (data?.session?.access_token) {
        await AsyncStorage.setItem("userToken", data.session.access_token);
        setIsAuthenticated(true);
      } else {
        throw new Error("No session token received");
      }
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to sign up");
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = () => {
    navigation.navigate("LoginMain");
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login logic here
    Alert.alert("Coming Soon", `${provider} login will be available soon!`);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" />

      <Text style={styles.heading}>Getting Started!</Text>
      <Text style={styles.subheading}>
        Create an Account to Continue your allCourses
      </Text>

      <View style={styles.inputContainer}>
        <Mail size={20} color="#A0A0A0" style={styles.icon} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#A0A0A0"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Lock size={20} color="#A0A0A0" style={styles.icon} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!passwordVisible}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={handleTogglePasswordVisibility}>
          {passwordVisible ? (
            <EyeOff size={20} color="#A0A0A0" style={styles.iconRight} />
          ) : (
            <Eye size={20} color="#A0A0A0" style={styles.iconRight} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.termsContainer}>
        <TouchableOpacity
          style={[
            styles.checkbox,
            {
              backgroundColor: termsAccepted ? "#2563EB" : "#FFFFFF",
              borderWidth: 1,
              borderColor: "#2563EB",
            },
          ]}
          onPress={() => setTermsAccepted(!termsAccepted)}
        />
        <Text style={styles.termsText}>Agree to Terms & Conditions</Text>
      </View>

      <TouchableOpacity
        style={[styles.signUpButton, loading && { opacity: 0.7 }]}
        onPress={handleSignUp}
        disabled={loading}
      >
        <Text style={styles.signUpText}>
          {loading ? "Signing up..." : "Sign Up"}
        </Text>
        <ArrowRight size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.orText}>Or Continue With</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLogin("Google")}
        >
          <View style={styles.socialIconContainer}>
            <Image
              source={require("@/shared/assets/icons/google-icon.png")}
              style={styles.socialIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLogin("Apple")}
        >
          <View style={styles.socialIconContainer}>
            <Image
              source={require("@/shared/assets/icons/apple-icon.png")}
              style={styles.socialIcon}
            />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.loginText}>
        Already have an Account?{" "}
        <Text onPress={handleSignIn} style={styles.loginLink}>
          SIGN IN
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;
