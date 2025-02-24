import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#212121",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },
  dot: {
    backgroundColor: "#D3D3D3",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#3B82F6",
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  skipButton: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  skipText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: "#3B82F6",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  nextText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
