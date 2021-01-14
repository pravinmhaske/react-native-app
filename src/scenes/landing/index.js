import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ScreenContainer from "./../wrapper";

export const LandingScreen = ({ navigation }) => {
  const goToSignIn = () => navigation.push("SignIn");

  const goToSignUp = () => navigation.push("CreateAccount");
  return (
    <ScreenContainer>
      <Text>Landing Page</Text>
      <Button title="Sign In" onPress={goToSignIn} />
      <Button title="Create Account" onPress={goToSignUp} />
    </ScreenContainer>
  );
};


export default LandingScreen;
