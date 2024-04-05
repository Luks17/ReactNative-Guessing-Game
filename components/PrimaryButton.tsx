import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  children?: React.ReactNode;
}

function PrimaryButton({ children }: Props) {
  function pressHandler() {
    console.log("Pressed");
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressedIos]
            : styles.innerContainer
        }
        android_ripple={{ color: "#640233" }}
        onPress={pressHandler}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 2,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  pressedIos: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
