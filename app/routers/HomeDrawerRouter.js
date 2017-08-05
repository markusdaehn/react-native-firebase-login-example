import React, { Component } from 'react';
import Home from '../screens/Home';
import BlankPage2 from '../screens/BlankPage2';
import { DrawerNavigator } from 'react-navigation';
import DrawerBar from '../screens/DrawerBar';

export default (DrawNav = DrawerNavigator({
    Home: {
      screen: Home,
      title: 'Home'
    },
    BlankPage2: {
      screen: BlankPage2,
      title: 'Blank Page 2'
    }
  }, {
    contentComponent: props => <DrawerBar {...props} />,
    headerMode: 'none'
  }
));
