import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { ArrowRight, Eye, EyeOff, User, Lock } from "lucide-react-native";
import styles from "./LoginWithYourAccountStyles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/shared/hooks/useAuth";

const LoginWithYourAccount = () => {
  const navigation: any = useNavigation();
  const { setIsAuthenticated } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      // TODO: Show error message
      console.error("Please fill in all fields");
      return;
    }

    try {
      // TODO: Implement actual login logic here
      // For now, just navigate to Home
      navigation.navigate("Home");
    } catch (error) {
      console.error("Login error:", error);
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
          placeholder="Username"
          placeholderTextColor="#A0A0A0"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
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

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInButtonText}>Sign In</Text>
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
