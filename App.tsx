import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  function pickedNumberHandler(n: number) {
    setUserNumber(n);
  }

  function gameOverHandler() {
    setIsGameOver(true);
  }

  let currentScreen = <StartScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    currentScreen = isGameOver ? (
      <GameOverScreen />
    ) : (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  return (
    <>
      <StatusBar style="inverted" />
      <LinearGradient
        colors={[colors.primary900, colors.accent500]}
        style={styles.screen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.screen}
          imageStyle={styles.bgImg}
        >
          <SafeAreaView style={styles.screen}>{currentScreen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bgImg: { opacity: 0.3 },
});
