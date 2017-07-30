import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Icon,
  View,
  Text
} from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { setUser } from '../../actions/user';
import styles from './styles';
import LoginForm from './LoginForm';

const background = require('../../../images/shadow.png');

export default class Login extends Component {
  render() {
    const navigate = this.props.navigation.navigate.bind(this.props.navigation);
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <LoginForm login={() => navigate('Home')}/>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}
