import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@/src/screens/HomeScreen/ui/HomeScreen";
import { OnboardingScreen } from "../screens/OnBoardingScreen";
import ScreenWrapper from "../shared/wrappers/ScreenWrapper/ui/ScreenWrapper";
import { useAuth } from "../shared/hooks/useAuth";
import LoginRoute from "./routes/LoginRoute";
import LoginWithYourAccount from "../screens/LoginWithYourAccount/ui/LoginWithYourAccount";

type RootStackParamList = {
  OnboardingScreen: undefined;
  Login: undefined;
  Home: undefined;
  LoginWithYourAccount: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const { isFirstLaunch, isAuthenticated, setIsAuthenticated } = useAuth();

  if (isFirstLaunch === null || isAuthenticated === null) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isFirstLaunch && (
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        )}

        <Stack.Screen
          name="Login"
          children={(props) => (
            <LoginRoute {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Stack.Screen
          name="LoginWithYourAccount"
          component={LoginWithYourAccount}
        />

        {isAuthenticated && <Stack.Screen name="Home" component={HomeScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
