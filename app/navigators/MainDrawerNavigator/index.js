import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Button} from 'react-native';
import {connect} from 'react-redux';
import { DrawerNavigator, DrawerItems, addNavigationHelpers } from 'react-navigation';
import StoreFrontStackNavigator from '../StoreFrontStackNavigator';

export const MainDrawerNavigator = DrawerNavigator({
    StoreFront: { screen: StoreFrontStackNavigator },
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
    navState: state.navigators.main,
  });

  export default connect(mapStateToProps)(MainDrawerNavigatorWithNavigationState);
