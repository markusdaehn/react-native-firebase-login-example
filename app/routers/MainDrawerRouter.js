import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Button} from 'react-native';
import {connect} from 'react-redux';
import { DrawerNavigator, DrawerItems, addNavigationHelpers } from 'react-navigation';
import Home from '../screens/Home';
import Blank from '../screens/Blank';

export const MainDrawerRouter = DrawerNavigator({
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
    }
  }, {
    drawerPosition: 'left',
    headerMode: 'screen',
    contentComponent: props => (
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    ),
  });

  const MainDrawerRouterWithNavigationState = ({dispatch, navState}) => (
    <MainDrawerRouter navigation={addNavigationHelpers({dispatch, state: navState })} />
  );

  MainDrawerRouterWithNavigationState.propTypes = {
    navState: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  const mapStateToProps = (state) => ({
    navState: state.mainNav,
  });

  export default connect(mapStateToProps)(MainDrawerRouterWithNavigationState);
