import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    position: "absolute",
    paddingBottom: 30,
    bottom: 0,
    left: 0,
    right: 0,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  menuText: {
    fontSize: moderateScale(10),
    color: "#9E9E9E",
    marginTop: moderateScale(4),
    fontWeight: "600",
  },
  activeText: {
    color: "#00B074",
  },
});
