import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

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
    margin: 24,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;
