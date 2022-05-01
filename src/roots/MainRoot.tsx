import React from "react";
import { TestStack } from "./stacks/TestStack";
import { NavigationContainer } from '@react-navigation/native';

export const MainRoot = () => (
    <NavigationContainer>
        <TestStack />
    </NavigationContainer>
)
