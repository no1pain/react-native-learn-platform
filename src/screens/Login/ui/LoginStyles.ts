import { Dimensions, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F9FF",
    paddingHorizontal: moderateScale(24),
  },
  contentWrapper: {
    marginTop: height / 2 - moderateScale(150),
    width: "100%",
    alignItems: "center",
    paddingHorizontal: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: "600",
    color: "#111827",
    marginBottom: moderateScale(32),
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: moderateScale(12),
    borderRadius: moderateScale(12),
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: moderateScale(2) },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    elevation: 3,
    marginBottom: moderateScale(16),
    justifyContent: "center",
  },
  buttonText: {
    color: "#374151",
    fontSize: moderateScale(16),
  },
  dividerText: {
    color: "#6b7280",
    marginTop: moderateScale(59),
  },
  signInButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2563eb",
    paddingVertical: moderateScale(16),
    paddingHorizontal: moderateScale(24),
    borderRadius: moderateScale(9999),
    marginTop: moderateScale(30),
    width: "100%",
    elevation: 5,
  },
  signInButtonText: {
    color: "#ffffff",
    fontSize: moderateScale(16),
    fontWeight: "500",
  },
  signupText: {
    color: "#4b5563",
    marginTop: moderateScale(30),
  },
  signupLink: {
    color: "#2563eb",
    fontWeight: "600",
  },
  iconsContainer: {
    justifyContent: "flex-start",
  },
  iconContainer: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(24),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: moderateScale(16),
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
