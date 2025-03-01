import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackScreenProps } from "@react-navigation/stack";
import Login from "@/screens/Login/ui/Login";
import { OnboardingScreen } from "@/screens/OnBoardingScreen";
import LoginWithYourAccount from "@/screens/LoginWithYourAccount/ui/LoginWithYourAccount";
import { useAuth } from "@/shared/hooks/useAuth";

type LoginStackParamList = {
  OnboardingScreen: undefined;
  LoginMain: undefined;
  LoginWithYourAccount: undefined;
};

type RootStackParamList = {
  Login: undefined;
};

interface LoginRouteProps
  extends StackScreenProps<RootStackParamList, "Login"> {
  setIsAuthenticated: (value: boolean) => void;
}

const LoginStack = createStackNavigator<LoginStackParamList>();

const LoginRoute: React.FC<LoginRouteProps> = ({ setIsAuthenticated }) => {
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
      <LoginStack.Screen
        name="LoginMain"
        children={(nestedProps) => (
          <Login {...nestedProps} setIsAuthenticated={setIsAuthenticated} />
        )}
      />
      <LoginStack.Screen
        name="LoginWithYourAccount"
        component={LoginWithYourAccount}
      />
    </LoginStack.Navigator>
  );
};

export default LoginRoute;
