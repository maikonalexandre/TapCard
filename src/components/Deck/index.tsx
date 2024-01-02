import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CircularProgress } from "react-native-circular-progress";
import colors from "tailwindcss/colors";

interface DeckProps {
  title: string;
  percentage?: number;
}

export const Deck = ({ title, percentage = 0 }: DeckProps) => {
  return (
    <View className="w-full px-6 py-4 rounded-2xl mt-4 border border-zinc-200 ">
      <TouchableOpacity
        activeOpacity={0.2}
        className="flex flex-row justify-between items-center"
      >
        <Text className="text-base font-medium text-zinc-600">{title}</Text>
        <CircularProgress
          size={30}
          width={2}
          fill={percentage}
          tintColor={colors.emerald[500]}
          backgroundColor={colors.stone[300]}
        >
          {(fill) => (
            <Text className="text-[10px]  text-emerald-600">{fill}%</Text>
          )}
        </CircularProgress>
      </TouchableOpacity>
    </View>
  );
};
