import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Button, View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import { DrawerNavigator, DrawerItems, addNavigationHelpers } from 'react-navigation';
import {getMainNavState} from './selectors';
import header from './components/Header';
import Home from '../../scenes/Home';
import Blank from '../../scenes/Blank';

export const MainDrawerNavigator = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Blank: { screen: Blank },
}, {
  drawerPosition: 'left',
  contentComponent: props => (
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  ),
});

const MainDrawerNavigatorWithNavigationState = ({dispatch, navState}) => (
  <MainDrawerNavigator navigation={addNavigationHelpers({dispatch, state: navState })} />
);

MainDrawerNavigatorWithNavigationState.navigationOptions = {
  title: 'Good Title',
  headerStyle: {
    backgroundColor:'#3498db',
  },
  headerTitleStyle: {
    color: 'white',
  },
  headerTintColor: 'white',
  headerLeft: (props) => <Icon name='menu' onPress={() => alert(JSON.stringfy(props))}/>,
};

MainDrawerNavigatorWithNavigationState.propTypes = {
  navState: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  navState: getMainNavState(state),
});

export default connect(mapStateToProps)(MainDrawerNavigatorWithNavigationState);
