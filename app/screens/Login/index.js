import React, { Component } from 'react';
import { KeyboardAvoidingView, Image } from 'react-native';
import { Container, Content } from 'native-base';
import LoginForm from './LoginForm';
import styles from './styles';

const background = require('../../../images/login-bg.png');

export default class Login extends Component {
  render() {
    const submitLogin = () => this.props.navigation.navigate('Home');
    const gotoSignUp = () => this.props.navigation.navigate('SignUp')
    return (
      <Container>
        <KeyboardAvoidingView style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <LoginForm submitLogin={submitLogin} gotoSignUp={gotoSignUp}/>
            </Image>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
