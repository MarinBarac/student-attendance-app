import { HeaderBtn, HeaderText } from "@/components";
import { COLORS } from "@/constants";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(login)/index",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(login)/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="home"
        options={{
          headerStyle: {
            backgroundColor: COLORS.primaryLight,
          },
          headerShadowVisible: false,
          headerLeft: () => <HeaderText />,
          headerRight: () => <HeaderBtn />,
          title: "",
        }}
      />
    </Stack>
  );
}
