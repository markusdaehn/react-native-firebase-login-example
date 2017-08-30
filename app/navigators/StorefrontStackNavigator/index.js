import React from 'react';
import {StackNavigator} from 'react-navigation';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';
import PropTypes from 'prop-types';
import Home from '../../scenes/Home';
import Blank from '../../scenes/Blank'
import {getStorefrontNavState} from './selectors';
export const StorefrontStackNavigator = new StackNavigator({
  Home: { screen: Home },
  Blank: { screen: Blank },
});

const StorefrontStackNavigatorWithNavigationState = ({dispatch, navState}) => (
  <StorefrontStackNavigator navigation={addNavigationHelpers({dispatch, state: navState})} />
);

StorefrontStackNavigatorWithNavigationState.propTypes = {
  navState: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  navState: getStorefrontNavState(state),
});

export default connect(mapStateToProps)(StorefrontStackNavigatorWithNavigationState);
