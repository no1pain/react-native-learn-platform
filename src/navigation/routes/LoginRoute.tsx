import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import Login from "@/src/screens/Login/ui/Login";

type RootStackParamList = {
  Login: undefined;
};

interface LoginRouteProps
  extends StackScreenProps<RootStackParamList, "Login"> {
  setIsAuthenticated: (value: boolean) => void;
}

const LoginRoute: React.FC<LoginRouteProps> = ({
  setIsAuthenticated,
  ...props
}) => {
  return <Login {...props} setIsAuthenticated={setIsAuthenticated} />;
};

export default LoginRoute;
