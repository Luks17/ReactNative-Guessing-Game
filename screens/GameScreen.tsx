import { Alert, StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  userNumber: number;
  onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }: Props) {
  const [guess, setGuess] = useState(generateNumberBetween(1, 100, userNumber));

  function generateNumberBetween(min: number, max: number, exclude?: number) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (exclude && randomNumber === exclude) {
      return generateNumberBetween(min, max, exclude);
    }

    return randomNumber;
  }

  function nextGuessHandler(higher: boolean) {
    if ((higher && guess > userNumber) || (!higher && guess < userNumber)) {
      Alert.alert("Don't lie!", "Play fair with the computer!", [
        { text: "Sorry!", style: "cancel" },
      ]);

      return;
    }

    if (higher) {
      minBoundary = guess + 1;
    } else {
      maxBoundary = guess;
    }

    setGuess(generateNumberBetween(minBoundary, maxBoundary));
  }

  useEffect(() => {
    if (guess === userNumber) {
      onGameOver();
    }
  }, [guess]);

  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      <NumberContainer>{guess}</NumberContainer>
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
});

export default GameScreen;
