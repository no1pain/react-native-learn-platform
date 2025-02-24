import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ setIsAuthenticated }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email === "test@example.com" && password === "password123") {
      await AsyncStorage.setItem("userToken", "some-auth-token");
      setIsAuthenticated(true);
    } else {
      Alert.alert("Login Failed", "Invalid email or password");
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
