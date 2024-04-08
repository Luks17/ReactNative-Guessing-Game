import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import colors from "../../constants/colors";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

function InstructionText({ children, style }: Props) {
  return <Text style={[styles.textContainer, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  textContainer: {
    color: colors.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
