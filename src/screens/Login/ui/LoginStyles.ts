import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 32,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  buttonText: {
    color: "#374151",
    fontSize: 16,
  },
  dividerText: {
    color: "#6b7280",
    marginBottom: 16,
  },
  signInButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2563eb",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 9999,
    width: "100%",
    elevation: 5,
  },
  signInButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
  signupText: {
    color: "#4b5563",
    marginTop: 24,
  },
  signupLink: {
    color: "#2563eb",
    fontWeight: "600",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
    resizeMode: "contain",
  },
});
