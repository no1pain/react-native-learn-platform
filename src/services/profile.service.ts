import { supabase } from "@/lib/supabase";

export const profileService = {
  /**
   * Check if the user has completed their profile setup
   * @param userId The user's ID
   * @returns A boolean indicating if the profile is complete
   */
  async isProfileComplete(userId: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId);

      // If there's an error or no data or empty array, profile is not complete
      if (error || !data || data.length === 0) {
        console.log("Profile not found or error:", error);
        return false;
      }

      const profile = data[0];

      // Check if profile exists and has required fields filled
      return !!(
        profile &&
        profile.full_name &&
        profile.nick_name &&
        profile.email
      );
    } catch (error) {
      console.error("Error checking profile:", error);
      return false;
    }
  },

  /**
   * Get the user's profile data
   * @param userId The user's ID
   * @returns The user's profile data or null if not found
   */
  async getUserProfile(userId: string) {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId);

      if (error || !data || data.length === 0) {
        return null;
      }

      return data[0];
    } catch (error) {
      console.error("Error fetching profile:", error);
      return null;
    }
  },
};
