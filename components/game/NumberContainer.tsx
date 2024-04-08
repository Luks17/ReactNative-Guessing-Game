import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";
import { screenSm } from "../../constants/device";

function NumberContainer({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: colors.accent500,
    margin: screenSm ? 12 : 24,
    padding: screenSm ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.accent500,
    fontSize: screenSm ? 28 : 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;
