import {Dimensions, I18nManager, Platform} from "react-native";

export const {width, height} = Dimensions.get("window");

export const isRTL = I18nManager.isRTL;

export const isIos = Platform.OS === "ios";

export const isAndroid = Platform.OS === "android";

