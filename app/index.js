import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import configureStore from './configureStore';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import MainStackRouter from './routers/MainStackRouter';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Provider store={this.state.store}>
          <MainStackRouter />
        </Provider>
      </StyleProvider>
    );
  }
}
