import React from 'react';
import {ScrollView} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Home from '../screens/Home';
import Blank from '../screens/Blank';

export default MainDrawerRouter = DrawerNavigator({
    Home: {
      screen: Home,
      title: 'Home'
    },
    Blank: {
      screen: Blank,
      title: 'Blank Screen'
    }
  }, {
    drawerPosition: 'left',
    contentComponent: props => (
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    )
  });
