import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "@/src/screens/HomeScreen/ui/HomeScreen";
import { OnboardingScreen } from "@/src/screens/OnBoardingScreen";
import LoginScreen from "@/src/screens/LoginScreen/ui/LoginScreen"; // Import your Login screen
import ScreenWrapper from "../shared/wrappers/ScreenWrapper/ui/ScreenWrapper";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAppState = async () => {
      const hasSeenIntro = await AsyncStorage.getItem("hasSeenIntro");
      const userToken = await AsyncStorage.getItem("userToken"); // Assuming token is stored after login

      setIsFirstLaunch(hasSeenIntro === null);
      setIsAuthenticated(!!userToken);
    };

    checkAppState();
  }, []);

  if (isFirstLaunch === null || isAuthenticated === null) return null;

  return (
    <NavigationContainer>
      <ScreenWrapper>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isFirstLaunch && (
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          )}

          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />
            )}
          </Stack.Screen>

          {isAuthenticated && (
            <Stack.Screen name="Home" component={HomeScreen} />
          )}
        </Stack.Navigator>
      </ScreenWrapper>
    </NavigationContainer>
  );
};

export default AppNavigator;
