import LoginScreen from "./../scenes/login";
import React from "react";
import RegisterScreen from "./../scenes/registration";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
