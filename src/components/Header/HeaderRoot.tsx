import { View } from "react-native";
import { ReactNode } from "react";

export function HeaderRoot({ children }: { children: ReactNode }) {
  return (
    <View className="flex-row items-center p-2 justify-between">
      {children}
    </View>
  );
}
