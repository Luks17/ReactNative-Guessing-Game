import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import GameScreen from "./screens/GameScreen";
import colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [rounds, setRounds] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // const [isFontLoaded] = useFonts({
  //   Inter_400Regular,
  //   Inter_700Bold,
  // });
  //
  // const onLayoutRootView = useCallback(async () => {
  //   if (isFontLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [isFontLoaded]);

  function pickedNumberHandler(n: number) {
    setUserNumber(n);
  }

  function gameOverHandler(roundsTaken: number) {
    setIsGameOver(true);
    setRounds(roundsTaken);
  }

  function restartGameHandler() {
    setUserNumber(null);
    setRounds(0);
    setIsGameOver(false);
  }

  let currentScreen = <StartScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    currentScreen = isGameOver ? (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={rounds}
        onRestart={restartGameHandler}
      />
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
        // onLayout={onLayoutRootView}
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
