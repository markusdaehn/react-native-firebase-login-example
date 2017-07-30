import React, { Component } from 'react';
import {
  Item,
  Input,
  Button,
  Icon,
  View,
  Text
} from 'native-base';
import { Field, reduxForm } from 'redux-form';
import styles from './styles';
import validate from './validate';

const ErrorMessage = ({error}) => {
  if(error === undefined) return <Text />

  return (
    <Item style={{ borderColor: 'transparent' }}>
      <Icon active style={{ color: 'red', marginTop: 5 }} name='bug' />
      <Text style={{ fontSize: 15, color: 'red' }}>{error}</Text>
    </Item>
  );
}

const LoginInput = ({ input, icon, placeholder, meta: {error} }) => {
  return (
    <Item error={error !== undefined}>
      <Icon active name={icon} />
      <Input placeholder={placeholder} {...input} />
      <ErrorMessage error={error} />
    </Item>
  );
}

const LoginForm  = ({login}) =>  {
  return (
    <View style={styles.bg}>
      <Field name='email' icon='person' placeholder='EMAIL' component={LoginInput} />
      <Field name='password' icon='unlock' placeholder='PASSWORD' component={LoginInput} />
      <Button style={styles.btn} onPress={login}>
        <Text>Login</Text>
      </Button>
    </View>
  );
}

LoginForm.propTypes = {
  submit: React.PropTypes.func
};

export default reduxForm({
    form: 'login',
    validate
  })(LoginForm);
