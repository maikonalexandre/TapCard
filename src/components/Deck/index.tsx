import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CircularProgress } from "react-native-circular-progress";
import colors from "tailwindcss/colors";
import { twMerge } from "tailwind-merge";
import { useNavigation } from "@react-navigation/native";

interface DeckProps {
  title: string;
  percentage?: number;
}

export const Deck = ({ title, percentage = 0 }: DeckProps) => {
  const navigation = useNavigation();

  return (
    <View className="w-full px-6 py-4 rounded-2xl mt-4 border border-zinc-200 ">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("review", { category: title });
        }}
        activeOpacity={0.2}
        className="flex flex-row justify-between items-center"
      >
        <Text className="text-base font-medium text-zinc-600 underline ">
          {title}
        </Text>
        <CircularProgress
          size={30}
          width={2}
          fill={percentage}
          tintColor={
            percentage < 15
              ? colors.red[500]
              : percentage < 50
              ? colors.orange[400]
              : colors.emerald[500]
          }
          backgroundColor={colors.stone[300]}
        >
          {(fill) => (
            <Text
              className={twMerge(
                "text-[10px]",
                percentage < 20
                  ? "text-red-600"
                  : percentage < 50
                  ? "text-orange-500"
                  : "text-emerald-600"
              )}
            >
              {fill}%
            </Text>
          )}
        </CircularProgress>
      </TouchableOpacity>
    </View>
  );
};
