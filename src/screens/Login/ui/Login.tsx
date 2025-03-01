import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, StackActions } from "@react-navigation/native"; // Import StackActions
import { ArrowRight } from "lucide-react-native";
import { styles } from "./LoginStyles";

type LoginProps = {
  setIsAuthenticated: (value: boolean) => void;
};

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const navigation = useNavigation(); // Use the navigation object from useNavigation

  const handleLogin = async () => {
    await AsyncStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
    navigation.dispatch(StackActions.replace("LoginWithYourAccount"));
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
