import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import React from "react";
import {
  Touchable,
  TouchableOpacity,
  View,
  Text,
  Pressable,
} from "react-native";

import { FlipCard } from "../../components/Flipcard";

export function Review() {
  return (
    <Container>
      <Header />
      <FlipCard
        backCardContent="olá meu lindo hoje voce ralou muito não"
        frontCardContent="eita amigo lindo do caralho só"
      />
      <View className="flex w-full flex-row justify-around">
        <TouchableOpacity>
          <Text className="text-base px-10 py-2 my-8 text-white rounded-md bg-red-500 ">
            Errei
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-base px-10 py-2 my-8 text-white rounded-md bg-sky-500 ">
            Fácil
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
