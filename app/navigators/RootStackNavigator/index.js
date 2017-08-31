import React, {Component}  from 'react';
import {BackHandler} from 'react-native';
import MainDrawerNavigator from '../MainDrawerNavigator';
import header from '../MainDrawerNavigator/components/Header';
import {back} from '../actions';
import SignIn from '../../scenes/SignIn';
import SignUp from '../../scenes/SignUp';
import { StackNavigator, addNavigationHelpers } from "react-navigation";
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getRootNavState} from './selectors';


export const RootStackNavigator = StackNavigator({
  Main: {
    screen: MainDrawerNavigator,
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: () => null,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: () => null,
    }
  },
}, {
  headerMode: 'screen',
});

// @NOTE: Hookup root navigation to Redux
class RootStackNavigatorWithNavigationState extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress.bind(this));
  }
  onBackPress() {
    const {dispatch, navState} = this.props;
    dispatch(back())
    return true;
  }

  render() {
    const {dispatch, navState} = this.props;
    return (<RootStackNavigator navigation={addNavigationHelpers({dispatch, state: navState})} />);
  }
}

RootStackNavigatorWithNavigationState.propTypes = {
  navState: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  navState: getRootNavState(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   back: dispatch(back()),
//   dispatch,
// });

export default connect(mapStateToProps)(RootStackNavigatorWithNavigationState);
