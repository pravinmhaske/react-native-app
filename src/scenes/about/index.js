import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
 
const ProfileScreen = () => (
  <safeareaview style="{styles.container}">
    <text style="{styles.title}">My Profile</text>
  </safeareaview>
);
 
export default ProfileScreen;
 
const styles = StyleSheet.create({
  container: {
  	flex:1,
  	padding:50,
  	alignItems:"center",
  },
  title: {
  	marginTop:100,
    fontSize: 25,
    fontWeight: 'bold',
  },
});