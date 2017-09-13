import React, {Component}  from 'react';
import {BackHandler, Platform} from 'react-native';
import MainDrawerNavigator from '../MainDrawerNavigator';
import header from '../MainDrawerNavigator/components/Header';
import { back, navigate } from '../actions';
import SignIn from '../../scenes/SignIn';
import SignUp from '../../scenes/SignUp';
import { StackNavigator, addNavigationHelpers } from "react-navigation";
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getNavState} from '../selectors';


export const RootStackNavigator = StackNavigator({
  Main: {
    screen: MainDrawerNavigator,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Good Title',
        headerStyle: {
          backgroundColor:'#3498db',
        },
        headerTitleStyle: {
          color: 'white',
        },
        headerTintColor: 'white',
        headerLeft: <Icon name='menu' color='white' onPress={() => {
          //navigation.dispatch({routeName:'DrawerToggle'});
          if(navigation.state.index === 0) {
            navigation.dispatch(navigate({routeName:'DrawerOpen'}));
          } else {
            navigation.dispatch(navigate({routeName:'DrawerClose'}));
          }
        }}/>,
      }
    },
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
  isAndroid() {
    return Platform.OS === 'android';
  }
  componentDidMount() {
    if(this.isAndroid()){
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
    }
  }
  componentWillUnmount() {
    if(this.isAndroid()) {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress.bind(this));
    }
  }
  onBackPress() {
    const {dispatch, navState} = this.props;
    let index = 0;
    let route;

    dispatch(back());
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
  navState: getNavState(state),
});

export default connect(mapStateToProps)(RootStackNavigatorWithNavigationState);
