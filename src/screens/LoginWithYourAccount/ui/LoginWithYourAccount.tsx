import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { ArrowRight, Eye, Mail, Lock } from "lucide-react-native";
import styles from "./LoginWIthYourAccountStyles";
import { useNavigation } from "@react-navigation/native";

const LoginWithYourAccount = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("")} style={styles.logo} resizeMode="contain" />

      <Text style={styles.heading}>Getting Started.!</Text>
      <Text style={styles.subheading}>
        Create an Account to Continue your allCourses
      </Text>

      <View style={styles.inputContainer}>
        <Mail size={20} color="#A0A0A0" style={styles.icon} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#A0A0A0"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Lock size={20} color="#A0A0A0" style={styles.icon} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
          style={styles.input}
        />
        <Eye size={20} color="#A0A0A0" style={styles.iconRight} />
      </View>

      <View style={styles.termsContainer}>
        <TouchableOpacity style={styles.checkbox} />
        <Text style={styles.termsText}>Agree to Terms & Conditions</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.replace("Home");
        }}
        style={styles.signUpButton}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
        <ArrowRight size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.orText}>Or Continue With</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={require("")} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("")} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.loginText}>
        Already have an Account? <Text style={styles.loginLink}>SIGN IN</Text>
      </Text>
    </View>
  );
};

export default LoginWithYourAccount;
