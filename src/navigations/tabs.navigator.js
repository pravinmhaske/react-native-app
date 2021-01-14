import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen, SearchStackScreen } from "./stack.navigator";

const Tabs = createBottomTabNavigator();

function TabsScreen() {
  return (
    <Tabs.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerStyle: { backgroundColor: "tomato" },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: "#f8f8f8",
      }}
    >
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Search" component={SearchStackScreen} />
    </Tabs.Navigator>
  );
}
export default TabsScreen;
