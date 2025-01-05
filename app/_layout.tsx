import { GlobalProvider } from "@/lib/global-provider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="signIn" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
}
