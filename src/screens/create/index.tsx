import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { Container } from "../../components/Container";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";

export function CreateCard() {
  const navigation = useNavigation();
  return (
    <Container>
      <Header.Root>
        <Header.Button
          icon="chevron-left"
          onPress={() => navigation.goBack()}
        />
        <Header.Button icon="check" />
      </Header.Root>

      <View className="h-60 my-4  bg-neutral-200">
        <TextInput
          placeholder="Frente do card..."
          multiline
          textAlignVertical="top"
          className="flex-1 p-4 text-base font-medium overflow-scroll "
        />
      </View>
      <View className="h-60 my-4  bg-neutral-200">
        <TextInput
          placeholder="Costas do card..."
          multiline
          textAlignVertical="top"
          className="flex-1 p-4 text-base font-medium overflow-scroll "
        />
      </View>

      <View className="flex w-full flex-row justify-around">
        <TouchableOpacity>
          <Text className="text-base px-10 font-medium py-2 my-10 text-white rounded-md bg-sky-600 ">
            Mais
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
