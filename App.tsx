import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <View className="h-full w-full p-6 antialiased bg-stone-100">
      <Routes />
      <StatusBar style="dark" />
    </View>
  );
}
