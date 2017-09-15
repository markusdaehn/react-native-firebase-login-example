import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import SignUpForm from './SignUpForm';
import styles from './styles';
import onSubmit from './submit';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const gotoSignIn = () => this.props.navigation.navigate('SignIn');
    const gotoHome = () => this.props.navigation.navigate('Home');

    return (
      <ScrollView>
        <KeyboardAvoidingView keyboardShouldPersistTaps='handled'>
          <SignUpForm onSubmit={onSubmit} gotoSignIn={gotoSignIn} gotoHome={gotoHome}/>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
