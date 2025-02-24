import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuth = () => {
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

  return { isFirstLaunch, isAuthenticated, setIsAuthenticated };
};
