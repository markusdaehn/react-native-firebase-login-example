import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import SignUpForm from './SignUpForm';
import styles from './styles';
import onSubmit from './submit';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const gotoLogin = () => this.props.navigation.navigate('Login');
    const gotoHome = () => this.props.navigation.navigate('Home');

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView keyboardShouldPersistTaps='handled'>
          <SignUpForm onSubmit={onSubmit} gotoLogin={gotoLogin} gotoHome={gotoHome}/>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
