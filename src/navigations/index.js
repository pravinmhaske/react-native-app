import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./stack.navigator";

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default MainStackNavigator;
