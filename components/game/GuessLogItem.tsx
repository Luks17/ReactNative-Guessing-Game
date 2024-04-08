import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

interface Props {
  roundNumber: number;
  guess: number;
}

function GuessLogItem({ roundNumber, guess }: Props) {
  return (
    <View style={styles.itemContainer}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: colors.primary900,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 5,
    backgroundColor: colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
  },
});

export default GuessLogItem;
