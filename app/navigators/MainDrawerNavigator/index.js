import React from 'react';
import {ScrollView} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Home from '../../screens/Home';
import Blank from '../../screens/Blank';
import SignIn from '../../screens/SignIn';
import Menu from './components/Menu';

const routeConfig = {
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Blank: {
    screen: Blank,
    navigationOptions: {
      drawerLabel: 'Blank',
    },
  },
};

const drawerNavigatorConfig = {
  drawerPosition: 'left',
  contentComponent: (props) => <Menu sections={createMenuSections()} />,
};


const MainDrawerNavigator = DrawerNavigator(routeConfig, drawerNavigatorConfig);

export default MainDrawerNavigator;

/**
 * Helper Functions
 */
const createMenuSections = () => {
  const accountSectionItems = [{key: 'SignIn', routeName: 'SignIn', label: 'Sign In'}];
  const mainSectionItems = Object.keys(routeConfig).map((key) => createMenuItem(key));

  return [
    {data: mainSectionItems, title:''},
    {data: accountSectionItems, title:'Account'}
  ];
}

function createMenuItem(key) {
  return {
    key,
    routeName: key,
    label: routeConfig[key].navigationOptions.drawerLabel,
  };
}
