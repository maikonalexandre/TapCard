import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="flex-row items-center justify-between pb-2 border-b border-b-neutral-300">
      <Text className="font-bold text-lg">TapCards</Text>
      <TouchableOpacity activeOpacity={0.2} className="rounded-full p-1">
        <Feather name="settings" size={20} />
      </TouchableOpacity>
    </View>
  );
}
