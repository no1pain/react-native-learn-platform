// LoginRoute.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "@/screens/Login/ui/Login";
import { OnboardingScreen } from "@/screens/OnBoardingScreen";
import SignUp from "@/screens/SignUp/ui/SignUp";
import LoginWithYourAccount from "@/screens/LoginWithYourAccount/ui/LoginWithYourAccount";
import { useAuth } from "@/shared/hooks/useAuth";

type LoginStackParamList = {
  OnboardingScreen: undefined;
  LoginMain: undefined;
  SignUp: undefined;
  LoginWithYourAccount: undefined;
};

const LoginStack = createStackNavigator<LoginStackParamList>();

const LoginRoute: React.FC = () => {
  const { isFirstLaunch } = useAuth();

  if (isFirstLaunch === null) return null;

  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      {isFirstLaunch && (
        <LoginStack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
        />
      )}
      <LoginStack.Screen name="LoginMain" component={Login} />
      <LoginStack.Screen name="SignUp" component={SignUp} />
      <LoginStack.Screen
        name="LoginWithYourAccount"
        component={LoginWithYourAccount}
      />
    </LoginStack.Navigator>
  );
};

export default LoginRoute;
