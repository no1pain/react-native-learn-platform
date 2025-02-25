import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 5,
  },
  subheading: {
    fontSize: 14,
    color: "#6D6D6D",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  iconRight: {
    marginLeft: 10,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: "green",
    marginRight: 10,
  },
  termsText: {
    fontSize: 14,
    color: "#333",
  },
  signUpButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 30,
    width: "100%",
    marginBottom: 20,
  },
  signUpText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  orText: {
    fontSize: 14,
    color: "#6D6D6D",
    marginBottom: 15,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  loginText: {
    fontSize: 14,
    color: "#6D6D6D",
  },
  loginLink: {
    color: "#2563EB",
    fontWeight: "bold",
  },
});
