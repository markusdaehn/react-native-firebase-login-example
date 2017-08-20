import React from 'react';
import MainDrawerRouter from '../routers/MainDrawerRouter';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import { StackNavigator } from "react-navigation";
import { Icon, Button } from 'react-native-elements';

export default StackNavigator({
  Main: {
    screen: MainDrawerRouter,
    navigationOptions: ({navigation}) => {
      const {navigate} = navigation;
      const openDrawer = () => navigate('DrawerOpen');

      return {
        title: 'Yuzsa',
        headerRight: (
          <Button transparent onPress={openDrawer}>
            <Icon name='menu' />
          </Button>
        ),
      }
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up',
    }
  },
});
