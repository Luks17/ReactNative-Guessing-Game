import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

interface Props {
  onPickNumber: (n: number) => void;
}

function StartScreen({ onPickNumber }: Props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();
  const marginTop = height < 450 ? 60 : 100;

  function numberInputHandler(text: string) {
    setEnteredNumber(text);
  }

  function resetInput() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = Number.parseInt(enteredNumber);

    if (Number.isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Please input a number between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInput,
        },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <ScrollView style={styles.screenContainer}>
      <KeyboardAvoidingView style={styles.screenContainer} behavior="position">
        <View style={[styles.mainContainer, { marginTop }]}>
          <Title>Guess my Number</Title>
          <Card>
            <InstructionText>Enter a number to be guessed!</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    rowGap: 32,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    fontWeight: "bold",
    color: colors.accent500,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent500,
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    columnGap: 10,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartScreen;
