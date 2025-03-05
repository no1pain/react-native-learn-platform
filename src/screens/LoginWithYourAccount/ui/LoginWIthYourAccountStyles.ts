import { StyleSheet } from "react-native";
import { moderateScale } from "@/shared/utils/scaling";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    alignItems: "center",
    padding: moderateScale(20),
  },
  logo: {
    width: moderateScale(150),
    height: moderateScale(100),
    marginBottom: moderateScale(20),
  },
  heading: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: moderateScale(5),
  },
  subheading: {
    fontSize: moderateScale(14),
    color: "#6D6D6D",
    marginBottom: moderateScale(20),
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(10),
    width: "100%",
    marginBottom: moderateScale(15),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: moderateScale(2) },
    shadowRadius: moderateScale(4),
    elevation: 2,
  },
  icon: {
    marginRight: moderateScale(10),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(16),
    color: "#333",
  },
  iconRight: {
    marginLeft: moderateScale(10),
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: moderateScale(20),
  },
  forgotPasswordText: {
    color: "#2563EB",
    fontSize: moderateScale(14),
  },
  signInButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2563EB",
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(30),
    width: "100%",
    marginBottom: moderateScale(20),
  },
  signInButtonText: {
    color: "white",
    fontSize: moderateScale(16),
    fontWeight: "bold",
    marginRight: moderateScale(10),
  },
  signupText: {
    fontSize: moderateScale(14),
    color: "#6D6D6D",
  },
  signupLink: {
    color: "#2563EB",
    fontWeight: "bold",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: moderateScale(20),
  },
  checkbox: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(5),
    backgroundColor: "green",
    marginRight: moderateScale(10),
  },
  termsText: {
    fontSize: moderateScale(14),
    color: "#333",
  },
  orText: {
    fontSize: moderateScale(14),
    color: "#6D6D6D",
    marginBottom: moderateScale(15),
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(24),
    borderRadius: moderateScale(12),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: moderateScale(2) },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    elevation: 2,
    width: moderateScale(80),
    height: moderateScale(50),
  },
  socialIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  socialIcon: {
    width: moderateScale(24),
    height: moderateScale(24),
    resizeMode: "contain",
  },
  loginText: {
    fontSize: moderateScale(14),
    color: "#6D6D6D",
  },
  loginLink: {
    color: "#2563EB",
    fontWeight: "bold",
  },
});
