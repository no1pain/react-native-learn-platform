import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#17252A",
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  categoriesContainer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingLeft: 20,

    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  categoriesContent: {
    flexDirection: "row",
    gap: 12,
  },
  content: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  coursesContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  noResultsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#17252A",
    marginBottom: 8,
  },
  noResultsSubtext: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
  },
});
