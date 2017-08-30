import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Button} from 'react-native';
import {connect} from 'react-redux';
import { DrawerNavigator, DrawerItems, addNavigationHelpers } from 'react-navigation';
import StorefrontStackNavigator from '../StorefrontStackNavigator';
import {getMainNavState} from './selectors';

export const MainDrawerNavigator = DrawerNavigator({
    StoreFront: { screen: StorefrontStackNavigator },
  }, {
    drawerPosition: 'left',
    headerMode: 'screen',
    contentComponent: props => (
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    ),
  });

  const MainDrawerNavigatorWithNavigationState = ({dispatch, navState}) => (
    <MainDrawerNavigator navigation={addNavigationHelpers({dispatch, state: navState })} />
  );

  MainDrawerNavigatorWithNavigationState.propTypes = {
    navState: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  const mapStateToProps = (state) => ({
    navState: getMainNavState(state),
  });

  export default connect(mapStateToProps)(MainDrawerNavigatorWithNavigationState);
