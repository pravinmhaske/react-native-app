import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableHighlight} from 'react-native';
 
const HomeScreen = ({navigation}) => (
  <safeareaview style="{styles.container}">
    <text style="{styles.title}">Home Screen</text>
    <touchablehighlight style="{styles.homeBtn}" onpress={() => navigation.navigate('Home')}>
      <text style="{styles.btnTitle}">Go Home</text>
    </touchablehighlight>
  </safeareaview>
);
 
export default HomeScreen;
 
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
  btnTitle: {
    fontSize: 16,
    color:"#fff",
    fontWeight: 'bold',
  },
  
  homeBtn: {
  	marginTop:100,
  	padding:10,
  	borderRadius:5,
  	backgroundColor:"#3498db"
  },
});
 