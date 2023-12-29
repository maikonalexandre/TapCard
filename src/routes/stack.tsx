import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home";

const { Screen, Navigator } = createNativeStackNavigator();

export function stackRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        options={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
        component={Home}
      />
    </Navigator>
  );
}
