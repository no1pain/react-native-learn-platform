import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuth = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAppState = async () => {
      try {
        const hasSeenIntro = await AsyncStorage.getItem("hasSeenIntro");
        const userToken = await AsyncStorage.getItem("userToken");

        setIsFirstLaunch(hasSeenIntro === null);
        setIsAuthenticated(!!userToken);
      } catch (error) {
        console.error("Error checking app state:", error);
        setIsAuthenticated(false);
      }
    };

    checkAppState();
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return { isFirstLaunch, isAuthenticated, setIsAuthenticated, logout };
};
