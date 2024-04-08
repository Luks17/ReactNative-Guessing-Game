import React from "react";
import { StyleSheet, Text } from "react-native";

function Title({ children }: { children: React.ReactNode }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    alignSelf: "center",
  },
});

export default Title;
