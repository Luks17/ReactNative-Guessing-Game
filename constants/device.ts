import { Dimensions } from "react-native";

export const deviceWidth = Dimensions.get("window").width;

export const screenSm = deviceWidth < 370;
