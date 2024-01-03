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
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

export function Review() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header.Root>
        <Header.Button
          icon="chevron-left"
          onPress={() => navigation.goBack()}
        />
        <Header.Button
          icon="plus-circle"
          onPress={() => navigation.navigate("create")}
        />
        <Header.Button icon="edit-2" />
      </Header.Root>

      <FlipCard
        backCardContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officia
        aliquam minus. Odit delectus harum minima magni animi vel quidem inventore
        voluptatibus. Distinctio, eligendi placeat eos incidunt voluptates eum
        voluptatem!"
        frontCardContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officia
        aliquam minus. Odit delectus harum minima magni animi vel quidem inventore
        voluptatibus. Distinctio, eligendi placeat eos incidunt voluptates eum
        voluptatem!"
      />

      <View className="flex w-full flex-row justify-around">
        <TouchableOpacity>
          <Text className="text-base px-10 font-medium py-2 my-10 text-white rounded-md bg-red-600 ">
            Errei
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-base px-10 font-medium py-2 my-10 text-white rounded-md bg-sky-600 ">
            Fácil
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
