import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { ArrowRight, Eye, EyeOff, Mail, Lock } from "lucide-react-native";
import styles from "./SignUpStyles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/shared/hooks/useAuth";

const SignUp = () => {
  const navigation: any = useNavigation();
  const { setIsAuthenticated } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSignUp = async () => {
    navigation.navigate("Home");
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = () => {
    navigation.navigate("LoginMain");
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login logic here
    console.log(`Logging in with ${provider}`);
    navigation.navigate("Home");
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

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
        <ArrowRight size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.orText}>Or Continue With</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLogin("google")}
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
          onPress={() => handleSocialLogin("apple")}
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
