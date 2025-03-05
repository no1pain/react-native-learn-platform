import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { ArrowRight, Eye, EyeOff, User, Lock } from "lucide-react-native";
import styles from "./LoginWithYourAccountStyles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/shared/hooks/useAuth";
import { signInWithEmail } from "@/lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginWithYourAccount = () => {
  const navigation: any = useNavigation();
  const { setIsAuthenticated } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await signInWithEmail(email, password);
      if (error) throw error;

      // Store the session token
      if (data?.session?.access_token) {
        await AsyncStorage.setItem("userToken", data.session.access_token);
        setIsAuthenticated(true);
      } else {
        throw new Error("No session token received");
      }
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" />

      <Text style={styles.heading}>Welcome Back!</Text>
      <Text style={styles.subheading}>
        Sign in to continue your learning journey
      </Text>

      <View style={styles.inputContainer}>
        <User size={20} color="#A0A0A0" style={styles.icon} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#A0A0A0"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
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

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.signInButton, loading && { opacity: 0.7 }]}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.signInButtonText}>
          {loading ? "Signing in..." : "Sign In"}
        </Text>
        <ArrowRight size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don't have an account?{" "}
        <Text onPress={handleSignUp} style={styles.signupLink}>
          SIGN UP
        </Text>
      </Text>
    </View>
  );
};

export default LoginWithYourAccount;
