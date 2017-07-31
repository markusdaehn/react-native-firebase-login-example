import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  View,
} from 'native-base';
import styles from './styles';
import { setUser } from '../../actions/user';
import LoginForm from './LoginForm';

const background = require('../../../images/login-bg.png');

export default class Login extends Component {
  render() {
    const navigate = () => this.props.navigation.navigate('Home');
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <LoginForm handleSubmit={navigate}/>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}
