import * as Font from "expo-font";
import {
    Gluten_100Thin,
    Gluten_200ExtraLight,
    Gluten_300Light,
    Gluten_400Regular,
    Gluten_500Medium,
    Gluten_600SemiBold,
    Gluten_700Bold,
    Gluten_800ExtraBold,
    Gluten_900Black,
} from "@expo-google-fonts/gluten";

const useFonts= async () => {
    await Font.loadAsync({
        Gluten_100Thin,
        Gluten_200ExtraLight,
        Gluten_300Light,
        Gluten_400Regular,
        Gluten_500Medium,
        Gluten_600SemiBold,
        Gluten_700Bold,
        Gluten_800ExtraBold,
        Gluten_900Black,
    })
};

export default useFonts;