import React, { Component } from 'react';
import Home from '../components/Home';
import BlankPage2 from '../components/BlankPage2';
import { DrawerNavigator } from 'react-navigation';
import DrawerBar from '../components/DrawerBar';

export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home },
    BlankPage2: { screen: BlankPage2 }
  },
  {
    contentComponent: props => <DrawerBar {...props} />
  }
))
