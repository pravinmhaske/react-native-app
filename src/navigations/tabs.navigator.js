import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen, SearchStackScreen } from "./stack.navigator";

const Tabs = createBottomTabNavigator();

function TabsScreen() {
  return (
    <Tabs.Navigator
     screenOptions={{
      tabBarColor: "#490222"
    }}
      
    >
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Search" component={SearchStackScreen} />
    </Tabs.Navigator>
  );
}
export default TabsScreen;
