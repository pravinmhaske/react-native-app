// import React from 'react';
// import {View,Text} from 'react-native';
// import {HelloWorld} from '_atoms';
// const App = () => (
//   <View>
//     <Text>Hello World 123
//     </Text>
//     <HelloWorld name="Helder Burato Berto" />
//   </View>
// );

// export default App;



import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './scenes/login';
// import RegisterScreen from './scenes/registration'


// const Stack = createStrackNavigator();

import MainStackNavigator from '_navigations';

// const App = () => <Navigator />;
const App = () => <MainStackNavigator />;
// {
//     return (
//     <NavigationContainer>
//        <Stack.Navigator>
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Register" component={RegisterScreen} />
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// };




export default App;