import { Alert, FlatList, StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { AntDesign } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

interface Props {
  userNumber: number;
  onGameOver: (rounds: number) => void;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }: Props) {
  const initialGuess = generateNumberBetween(1, 100, userNumber);

  const [guesses, setGuesses] = useState([initialGuess]);

  function generateNumberBetween(min: number, max: number, exclude?: number) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (exclude && randomNumber === exclude) {
      return generateNumberBetween(min, max, exclude);
    }

    return randomNumber;
  }

  function nextGuessHandler(higher: boolean) {
    if (
      (higher && guesses[0] > userNumber) ||
      (!higher && guesses[0] < userNumber)
    ) {
      Alert.alert("Don't lie!", "Play fair with the computer!", [
        { text: "Sorry!", style: "cancel" },
      ]);

      return;
    }

    if (higher) {
      minBoundary = guesses[0] + 1;
    } else {
      maxBoundary = guesses[0];
    }

    const newGuess = generateNumberBetween(minBoundary, maxBoundary);
    setGuesses((prev) => [newGuess, ...prev]);
  }

  useEffect(() => {
    if (guesses[0] === userNumber) {
      onGameOver(guesses.length);
      minBoundary = 1;
      maxBoundary = 100;
    }
  }, [guesses]);

  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      <NumberContainer>{guesses[0]}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={() => nextGuessHandler(true)}>
            <AntDesign name="plus" size={16} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler(false)}>
            <AntDesign name="minus" size={16} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.logItems}
          data={guesses}
          keyExtractor={(item) => item.toString()}
          renderItem={(guess) => (
            <GuessLogItem
              roundNumber={guesses.length - guess.index}
              guess={guess.item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 30,
    padding: 24,
  },
  instructionText: {
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    columnGap: 10,
  },
  listContainer: {
    padding: 16,
    flex: 1,
  },
  logItems: {
    marginTop: 10,
    paddingRight: 10,
  },
});

export default GameScreen;
