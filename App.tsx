import { ImageBackground, StyleSheet } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      <LinearGradient colors={["#2b021f", "#ddb52f"]} style={styles.screen}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.screen}
          imageStyle={styles.bgImg}
        >
          <StartScreen />
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
