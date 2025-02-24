import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@/src/screens/HomeScreen/ui/HomeScreen";
import { OnboardingScreen } from "@/src/screens/OnBoardingScreen";
import ScreenWrapper from "../shared/wrappers/ScreenWrapper/ui/ScreenWrapper";
import { useAuth } from "../shared/hooks/useAuth";
import LoginRoute from "./routes/LoginRoute";

type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const { isFirstLaunch, isAuthenticated, setIsAuthenticated } = useAuth();

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
              <LoginRoute {...props} setIsAuthenticated={setIsAuthenticated} />
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
