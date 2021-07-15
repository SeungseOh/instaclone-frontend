import { isLoggedInVar, tokenVar, cache } from "./apollo";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageWrapper, persistCache } from "apollo3-cache-persist";

export default class Preloader {
  fontPromises: Promise<void>[];
  imagePromises: Promise<Asset[]>[];

  constructor() {
    const fontsToLoad = [Ionicons.font];
    const imagesToLoad = [require("../assets/logo.png")];
    // * 프리로드 항목
    this.fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
    this.imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
  }

  preloadAssets = async () => {
    // * Promise.all 은 배열에 있는 프로미스가 다 끝날때까지 기다려준다
    await Promise.all<Promise<void> | Promise<Asset[]>>([
      ...this.fontPromises,
      ...this.imagePromises,
    ]);
  };

  preload = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      isLoggedInVar(true);
      tokenVar(token);
    }
    /* await persistCache({
          cache,
          storage: new AsyncStorageWrapper(AsyncStorage),
          serialize: false,
        }); */
    return this.preloadAssets();
  };
}
