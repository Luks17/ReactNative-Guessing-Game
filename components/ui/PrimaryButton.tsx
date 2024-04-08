import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../../constants/colors";

interface Props {
  children?: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
}

function PrimaryButton({ children, onPress }: Props) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressedIos]
            : styles.innerContainer
        }
        android_ripple={{ color: colors.primary600 }}
        onPress={onPress}
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
    backgroundColor: colors.primary500,
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
