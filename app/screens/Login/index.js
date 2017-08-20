import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import LoginForm from './LoginForm';
import styles from './styles';

const background = require('../../../images/login-bg.png');

export default class Login extends Component {
  render() {
    const submitLogin = () => this.props.navigation.navigate('Home');
    const gotoSignUp = () => this.props.navigation.navigate('SignUp')
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container}>
          <Image source={background} style={styles.shadow}>
            <LoginForm submitLogin={submitLogin} gotoSignUp={gotoSignUp}/>
          </Image>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
