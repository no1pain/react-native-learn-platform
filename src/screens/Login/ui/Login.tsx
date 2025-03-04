// Login.tsx
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowRight } from "lucide-react-native";
import { styles } from "./LoginStyles";
import { useAuth } from "@/shared/hooks/useAuth";

const Login = () => {
  const navigation: any = useNavigation();
  const { setIsAuthenticated } = useAuth();

  const handleSocialLogin = async (provider: "google" | "apple") => {
    try {
      // TODO: Implement social login
      console.log(`${provider} login clicked`);
      // After successful social login:
      // await AsyncStorage.setItem('userToken', 'your-auth-token');
      // setIsAuthenticated(true);
      // navigation.navigate('Home');
    } catch (error) {
      console.error(`${provider} login error:`, error);
    }
  };

  const handleEmailLogin = () => {
    navigation.navigate("LoginWithYourAccount");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Let's you in</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSocialLogin("google")}
        >
          <View style={styles.iconContainer}>
            <Image
              source={require("@/shared/assets/icons/google-icon.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSocialLogin("apple")}
        >
          <View style={styles.iconContainer}>
            <Image
              source={require("@/shared/assets/icons/apple-icon.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>

        <Text style={styles.dividerText}>( Or )</Text>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={handleEmailLogin}
        >
          <Text style={styles.signInButtonText}>Sign in with your account</Text>
          <ArrowRight size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Don't have an account?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate("LoginWithYourAccount")}
          >
            SIGN UP
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
