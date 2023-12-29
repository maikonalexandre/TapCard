import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import React from "react";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "tailwindcss/colors";
import { Deck } from "../../components/Deck";

export function Home() {
  return (
    <Container>
      <Header />
      {/* <Text className="pt-4 text-base font-medium text-neutral-700 mb-2">
        Decks:
      </Text> */}
      <Deck />

      <View className="flex-1 items-center justify-center px-8">
        <Text className="text-center text-base font-medium text-neutral-400">
          Aqui estão todos os seus baralhos para revisão...
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.2}
        className="absolute bottom-8 right-8 bg-orange-500 p-4 rounded-full"
      >
        <Feather name="plus" size={20} color={colors.stone[100]} />
      </TouchableOpacity>
    </Container>
  );
}
