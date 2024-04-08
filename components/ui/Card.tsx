import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";
import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary700,
    borderRadius: 8,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    rowGap: 10,
  },
});

export default Card;
