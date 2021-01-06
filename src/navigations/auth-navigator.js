import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '_scenes/login';
import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';
import RegistrationScreen from '_scenes/registration';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: 'null',
  headerMode: 'screen',
};

const RouteConfigs = {
  Registration: {
    screen: RegistrationScreen,
    navigationOptions: () => ({
      title: `RegistrationScreen 1`,
      headerBackTitle: 'back RegistrationScreen',
    }),
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: `LoginScreen 1`,
      headerBackTitle: 'back LoginScreen',
    }),
  },

  Home: HomeScreen,
  About: AboutScreen,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
