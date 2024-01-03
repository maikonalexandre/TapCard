import React from "react";
import { TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";
import { Feather } from "@expo/vector-icons";

export function HeaderButton({
  icon,
  onPress,
}: {
  icon: keyof typeof Feather.glyphMap;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.2}
      className="rounded-full p-1"
    >
      <Feather name={icon} size={20} color={colors.neutral[500]} />
    </TouchableOpacity>
  );
}
