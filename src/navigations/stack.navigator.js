import LoginScreen from "./../scenes/login";
import React from "react";
import RegisterScreen from "./../scenes/registration";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerStyle: { backgroundColor: "tomato" },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: "#f8f8f8",
      }}
    >
      <Stack.Screen name="Login" options={{ title: 'Crypto List' }} component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
