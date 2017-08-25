import React from 'react';
import MainDrawerRouter from './MainDrawerNavigator';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import { StackNavigator, addNavigationHelpers } from "react-navigation";
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const RootStackNavigator = StackNavigator({
  Main: {
    screen: MainDrawerRouter,
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerTitle: 'Sign In',
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerTitle: 'Sign Up',
    }
  },
}, {
  headerMode: 'none'
});

// @NOTE: Hookup root navigation to Redux
const RootStackNavigatorWithNavigationState = ({dispatch, navState}) => (
  <RootStackNavigator navigation={addNavigationHelpers({dispatch, state: navState})}/>
);

RootStackNavigatorWithNavigationState.propTypes = {
  navState: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  navState: state.navigation.root
});

export default connect(mapStateToProps)(RootStackNavigatorWithNavigationState);
