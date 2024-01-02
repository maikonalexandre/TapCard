import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import React from "react";
import { Touchable, TouchableOpacity, View, Text } from "react-native";

export function Review() {
  return (
    <Container>
      <Header />

      <View className="flex-1 pt-6 pb-10">
        <TouchableOpacity
          activeOpacity={0.2}
          className="flex-1 bg-stone-200 rounded-lg shadow-sm"
        ></TouchableOpacity>
      </View>
      <View>
        <Text>olá</Text>
      </View>
    </Container>
  );
}
