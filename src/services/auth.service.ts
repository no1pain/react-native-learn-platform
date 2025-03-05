import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "@/lib/supabase";

export const authService = {
  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    if (data?.session?.access_token) {
      await AsyncStorage.setItem("userToken", data.session.access_token);
      return data;
    }

    throw new Error("No session token received");
  },

  async logout() {
    await Promise.all([
      supabase.auth.signOut(),
      AsyncStorage.removeItem("userToken"),
    ]);
  },

  async checkSession() {
    const [
      {
        data: { session },
      },
      userToken,
    ] = await Promise.all([
      supabase.auth.getSession(),
      AsyncStorage.getItem("userToken"),
    ]);

    return !!session || !!userToken;
  },

  onAuthStateChange(callback: (isAuthenticated: boolean) => void) {
    return supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session) {
        await AsyncStorage.setItem("userToken", session.access_token);
        callback(true);
      } else if (event === "SIGNED_OUT") {
        await AsyncStorage.removeItem("userToken");
        callback(false);
      }
    });
  },
};
