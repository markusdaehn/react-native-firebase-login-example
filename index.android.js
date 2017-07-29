import { AppRegistry } from 'react-native';
//@Note: Need to include index because app.json is picked up.
// see issue: https://github.com/facebook/react-native/issues/12539
import App from './app/index';
AppRegistry.registerComponent('yuzsa', () => App);
