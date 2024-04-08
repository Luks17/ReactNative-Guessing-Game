import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import colors from "../../constants/colors";

interface Props {
  children?: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

function PrimaryButton({ children, onPress, style }: Props) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressedIos, style]
            : [styles.innerContainer, style]
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
