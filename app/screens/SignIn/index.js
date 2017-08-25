import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import SignInForm from './SignInForm';
import styles from './styles';

const background = require('../../../images/login-bg.png');

export default class SignIn extends Component {
  render() {
    const signIn = () => this.props.navigation.navigate('Home');
    const gotoSignUp = () => this.props.navigation.navigate('SignUp')
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container}>
          <Image source={background} style={styles.shadow}>
            <SignInForm signIn={signIn} gotoSignUp={gotoSignUp}/>
          </Image>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
