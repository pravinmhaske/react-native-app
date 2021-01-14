import React from "react";
import { View, StyleSheet, Text,Button } from "react-native";
import ScreenContainer from "./../wrapper";
import { AuthContext } from "./../../contexts/context";

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
