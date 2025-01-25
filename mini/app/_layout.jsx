import { useNavigation } from 'expo-router';
import { Stack } from 'expo-router/stack';

export default function Layout() {
  const navigation = useNavigation()
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sign" options={{ headerShown: false }} />
      <Stack.Screen name="setting" options={{ headerShown: false }} />
      <Stack.Screen name="forget" options={{ headerShown: false }} />
      <Stack.Screen name="setcipher" options={{ headerShown: false }} />
    </Stack>
  );
}