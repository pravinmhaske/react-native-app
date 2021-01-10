import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import MyStack from "./stack.navigator";
import MyStack from "./tabs.navigator";


// function MainStackNavigator() {
//   return (
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   );
// }

function TabNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default TabNavigator;
