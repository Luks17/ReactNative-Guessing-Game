import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { screenSm } from "../constants/device";

interface Props {
  roundsNumber: number;
  userNumber: number;
  onRestart: () => void;
}

function GameOverScreen({ roundsNumber, userNumber, onRestart }: Props) {
  return (
    <View style={styles.screenContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestart} style={styles.startNewGameBtn}>
        Start new game
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 30,
  },
  imgContainer: {
    width: screenSm ? 200 : 300,
    height: screenSm ? 200 : 300,
    borderRadius: screenSm ? 100 : 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: colors.primary700,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 18,
    textAlign: "center",
  },
  highlightText: {
    color: colors.primary500,
  },
  startNewGameBtn: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});

export default GameOverScreen;
