import { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authService } from "@/services/auth.service";
import { supabase } from "@/lib/supabase";

export const useAuth = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const checkAuthState = useCallback(async () => {
    try {
      const hasSeenIntro = await AsyncStorage.getItem("hasSeenIntro");
      const isAuthed = await authService.checkSession();

      setIsFirstLaunch(hasSeenIntro === null);
      setIsAuthenticated(isAuthed);

      // If authenticated, get the current user
      if (isAuthed) {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user) {
          setUserId(user.id);
        }
      } else {
        setUserId(null);
      }
    } catch (error) {
      console.error("Error checking auth state:", error);
      setIsAuthenticated(false);
      setUserId(null);
    }
  }, []);

  useEffect(() => {
    checkAuthState();

    const {
      data: { subscription },
    } = authService.onAuthStateChange(async (isAuthed) => {
      setIsAuthenticated(isAuthed);

      // Get user ID when auth state changes
      if (isAuthed) {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user) {
          setUserId(user.id);
        }
      } else {
        setUserId(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [checkAuthState]);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
      setIsAuthenticated(false);
      setUserId(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  }, []);

  return {
    isFirstLaunch,
    isAuthenticated,
    userId,
    setIsAuthenticated,
    logout,
    checkAuthState,
  };
};
