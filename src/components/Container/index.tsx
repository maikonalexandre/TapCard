import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView className="p-4 flex-1">{children}</SafeAreaView>;
};
