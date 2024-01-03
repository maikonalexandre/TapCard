import { View } from "react-native";
import { ReactNode } from "react";

export function HeaderRoot({ children }: { children: ReactNode }) {
  return (
    <View className="flex-row items-center justify-between">{children}</View>
  );
}
