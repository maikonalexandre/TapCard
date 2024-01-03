import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface FlipCardProps {
  frontCardContent: string;
  backCardContent: string;
}

export const FlipCard = ({
  backCardContent,
  frontCardContent,
}: FlipCardProps) => {
  const flipPositionAnimate = useSharedValue(0);

  const frontCardAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${interpolate(
            flipPositionAnimate.value,
            [0, 1],
            [0, 180]
          )}deg`,
        },
      ],
    };
  });

  const backCardAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${interpolate(
            flipPositionAnimate.value,
            [0, 1],
            [180, 360]
          )}deg`,
        },
      ],
    };
  });

  const onAnimate = () => {
    const newValue = flipPositionAnimate.value === 0 ? 1 : 0;
    flipPositionAnimate.value = withTiming(newValue, { duration: 500 });
  };

  return (
    <Pressable
      onPress={onAnimate}
      className="flex-1 mt-4  rounded items-center justify-center relative"
    >
      <Animated.View
        style={[
          frontCardAnimated,
          styles.card,
          {
            backgroundColor: "red",
          },
        ]}
      >
        <View className="flex-1 bg-stone-200 p-4 items-center justify-center ">
          <Text className="text-center text-base font-medium text-neutral-600">
            {frontCardContent}
          </Text>
        </View>
      </Animated.View>

      <Animated.View
        style={[
          backCardAnimated,
          styles.card,
          {
            backgroundColor: "blue",
          },
        ]}
      >
        <View className="flex-1 bg-stone-200  p-4 items-center justify-center ">
          <Text className="text-center text-base font-medium text-neutral-600">
            {backCardContent}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  },
});
