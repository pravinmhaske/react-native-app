import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreateAccount from "./../scenes/registration";
import SignIn from "./../scenes/login";
import Home from "./../scenes/home";
import Search from "./../scenes/search";
import Search2 from "./../scenes/search2";
import Profile from "./../scenes/profile";
import Details from "./../scenes/details";
import Landing from "./../scenes/landing";
import DrawerScreen from "./drawer.navigator";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

export const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </HomeStack.Navigator>
);

export const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

const ProfileStack = createStackNavigator();
export const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      gestureEnabled: true,
      headerStyle: { backgroundColor: "tomato" },
      headerTitleStyle: { fontWeight: "bold" },
      headerTintColor: "#f8f8f8",
    }}
  >
    <AuthStack.Screen
      name="Landing"
      component={Landing}
      options={{ title: "Landing" }}
    />
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    />
  </AuthStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

export default RootStackScreen;
