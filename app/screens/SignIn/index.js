import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, Image, Text } from 'react-native';
import SignInForm from './SignInForm';
import styles from './styles';
import PropTypes from 'prop-types';

const background = require('../../../images/login-bg.png');

export const SignIn = (props) => (
  <ScrollView>
    <KeyboardAvoidingView>
       <Image source={background} style={styles.shadow}>
         <SignInForm/>
       </Image>
    </KeyboardAvoidingView>
  </ScrollView>
);

export default SignIn;
