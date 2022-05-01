import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import type { DiaryStackParamList } from "roots/stacks/DiaryStack";

type Props = NativeStackScreenProps<DiaryStackParamList, 'Test'>

export const TestScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
