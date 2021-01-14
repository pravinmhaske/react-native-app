import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProfileStackScreen } from "./stack.navigator";
import TabsScreen from "./tabs.navigator";

const Drawer = createDrawerNavigator();

const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

export default DrawerScreen;
