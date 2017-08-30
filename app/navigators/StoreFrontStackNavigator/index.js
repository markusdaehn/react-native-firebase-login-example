import React from 'react';
import {StackNavigator} from 'react-navigation';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';
import PropTypes from 'prop-types';
import Home from '../../scenes/Home';
import Blank from '../../scenes/Blank'

export const StoreFrontStackNavigator = new StackNavigator({
  Home: { screen: Home },
  Blank: { screen: Blank },
});

const StoreFrontStackNavigatorWithNavigationState = ({dispatch, navState}) => (
  <StoreFrontStackNavigator navigation={addNavigationHelpers({dispatch, state: navState})} />
);

StoreFrontStackNavigatorWithNavigationState.propTypes = {
  navState: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  navState: state.navigators.storefront,
});

export default connect(mapStateToProps)(StoreFrontStackNavigatorWithNavigationState);