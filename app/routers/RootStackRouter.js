import Login from '../screens/Login';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import BlankPage from '../screens/BlankPage';
import { StackNavigator } from "react-navigation";

export default (StackNav = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    },
  },
  BlankPage: {
    screen: BlankPage,
    navigationOptions: {
      title: 'Blank Page'
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up'
    }
  },
}, {
  headerMode: 'none'
}));
