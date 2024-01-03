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
      <Header.Root>
        <Header.Logo />
        <Header.Button icon="settings" />
      </Header.Root>

      <Deck title="ingles" percentage={10} />
      <Deck title="Espanhol" percentage={21} />
      <Deck title="Espanhol" percentage={90} />

      <View className="flex-1 items-center justify-center px-8">
        <Text className="text-center text-base font-medium text-neutral-400">
          Aqui estão todos os seus baralhos para revisão...
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.2}
        className="absolute bottom-8 right-6 bg-orange-500 p-4 rounded-full"
      >
        <Feather name="plus" size={20} color={colors.stone[100]} />
      </TouchableOpacity>
    </Container>
  );
}
