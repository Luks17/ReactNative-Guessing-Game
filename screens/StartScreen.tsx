import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartScreen() {
  return (
    <View style={styles.screenContainer}>
      <TextInput
        maxLength={2}
        keyboardType="number-pad"
        style={styles.numberInput}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    rowGap: 10,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    fontWeight: "bold",
    color: "#ddb52f",
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
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
