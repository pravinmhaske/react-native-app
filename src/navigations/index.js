import MyStack from "./stack.navigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default MainStackNavigator;
