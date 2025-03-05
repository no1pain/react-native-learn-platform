import { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authService } from "@/services/auth.service";

export const useAuth = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const checkAuthState = useCallback(async () => {
    try {
      const hasSeenIntro = await AsyncStorage.getItem("hasSeenIntro");
      const isAuthed = await authService.checkSession();

      setIsFirstLaunch(hasSeenIntro === null);
      setIsAuthenticated(isAuthed);
    } catch (error) {
      console.error("Error checking auth state:", error);
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    checkAuthState();

    // Set up auth state change listener
    const {
      data: { subscription },
    } = authService.onAuthStateChange((isAuthed) => {
      setIsAuthenticated(isAuthed);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [checkAuthState]);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  }, []);

  return {
    isFirstLaunch,
    isAuthenticated,
    setIsAuthenticated,
    logout,
    checkAuthState,
  };
};
