import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import LoginScreen from "@/src/screens/LoginScreen/ui/LoginScreen";

type LoginRouteProps = StackScreenProps<any, "Login"> & {
  setIsAuthenticated: (value: boolean) => void;
};

const LoginRoute: React.FC<LoginRouteProps> = ({
  setIsAuthenticated,
  ...props
}) => {
  return <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />;
};

export default LoginRoute;
