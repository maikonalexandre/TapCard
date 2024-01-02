import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home";
import { Review } from "../screens/review";

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
      <Screen
        name="review"
        options={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
        component={Review}
      />
    </Navigator>
  );
}
