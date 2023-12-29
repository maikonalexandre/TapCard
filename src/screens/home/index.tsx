import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  return (
    <SafeAreaView className="bg-red-500 p-4">
      <View>
        <Header />
      </View>
    </SafeAreaView>
  );
}
