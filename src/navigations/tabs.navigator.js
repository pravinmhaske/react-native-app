import LoginScreen from "./../scenes/login";
import React from "react";
import RegisterScreen from "./../scenes/registration";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

function TabsNav() {
  return (
    <Tabs.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerStyle: { backgroundColor: "tomato" },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: "#f8f8f8",
      }}
    >
      <Tabs.Screen name="Login" options={{ title: 'Crypto List' }} component={LoginScreen} />
      <Tabs.Screen name="Register" component={RegisterScreen} />
    </Tabs.Navigator>
  );
}

export default TabsNav;
