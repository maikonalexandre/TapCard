import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <View className="h-full w-full p-6 antialiased bg-zinc-900">
      <Routes />
      <StatusBar style="light" />
    </View>
  );
}
