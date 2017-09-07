import React from 'react';
import {ScrollView} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Home from '../../scenes/Home';
import Blank from '../../scenes/Blank';
import SignIn from '../../scenes/SignIn';

export const MainDrawerNavigator = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Blank: { screen: Blank },
  SignIn: { screen: SignIn },
}, {
  drawerPosition: 'left',
  contentComponent: props => (
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  ),
});

export default MainDrawerNavigator;
