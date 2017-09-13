import React from 'react';
import {ScrollView} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Home from '../../scenes/Home';
import Blank from '../../scenes/Blank';
import SignIn from '../../scenes/SignIn';
import Menu from './components/Menu';

const routeConfig = {
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home 2',
    },
  },
  Blank: {
    screen: Blank,
    navigationOptions: {
      drawerLabel: 'Blank 2',
    },
  },
};

const drawerNavigatorConfig = {
  drawerPosition: 'left',
  contentComponent: (props) => <Menu sections={createSections()} />,
};


const MainDrawerNavigator = DrawerNavigator(routeConfig, drawerNavigatorConfig);

export default MainDrawerNavigator;

const createSections = () => {
  const accountSectionItems = [{key: 'SignIn', routeName: 'SignIn', label: 'Sign In'}];
  const mainSectionItems = Object.keys(routeConfig).map((key) => createItem(key));

  return [
    {data: mainSectionItems, title:''},
    {data: accountSectionItems, title:'Account'}
  ];
}

function createItem(key) {
  return {
    key,
    routeName: key,
    label: routeConfig[key].navigationOptions.drawerLabel,
  };
}
