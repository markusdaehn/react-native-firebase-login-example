import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import SignUpForm from './SignUpForm';
import styles from './styles';

export const SignUpScreen = (props) => (
  <ScrollView>
    <KeyboardAvoidingView keyboardShouldPersistTaps='handled'>
      <SignUpForm/>
    </KeyboardAvoidingView>
  </ScrollView>
);

export default SignUpScreen;
