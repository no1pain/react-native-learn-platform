// Login.tsx
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowRight } from "lucide-react-native";
import { styles } from "./LoginStyles";
import { useAuth } from "@/shared/hooks/useAuth"; // Import useAuth

const Login = () => {
  const navigation: any = useNavigation();
  const { setIsAuthenticated } = useAuth(); // Get setIsAuthenticated

  const handleLogin = async () => {
    setIsAuthenticated(true); // Update auth state
    navigation.navigate("LoginWithYourAccount");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let’s you in</Text>

      <TouchableOpacity style={styles.button}>
        <Image
          source={require("@/shared/assets/icons/google-icon.svg")}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image
          source={require("@/shared/assets/icons/google-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <Text style={styles.dividerText}>( Or )</Text>

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInButtonText}>Sign In with Your Account</Text>
        <ArrowRight size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don’t have an Account? <Text style={styles.signupLink}>SIGN UP</Text>
      </Text>
    </View>
  );
};

export default Login;
