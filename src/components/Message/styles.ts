import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 36,
  },
  message: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginBottom: 12,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontFamily: FONTS.REGULAR,
    fontSize: 15,
    color: COLORS.WHITE,
    marginLeft: 16,
  },
});
