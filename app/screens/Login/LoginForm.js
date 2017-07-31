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

const FormField = ({ input, icon, meta: {error}, ...inputProps}) => {
  return (
    <Item error={error !== undefined}>
      <Icon active name={icon} />
      <Input {...inputProps} {...input} />
      <ErrorMessage error={error} />
    </Item>
  );
}

const EmailField = () => {
  return (<Field name='email' icon='person' placeholder='EMAIL'  keyboardType="email-address" component={FormField} />);
}

const PasswordField = () => {
  return (<Field name='password' icon='unlock' placeholder='PASSWORD' secureTextEntry component={FormField} />);
}

const LoginForm  = ({login}) =>  {
  return (
    <View style={styles.bg}>
      <EmailField />
      <PasswordField />
      <Button style={styles.btn} onPress={login}>
        <Text>Login</Text>
      </Button>
    </View>
  );
}

LoginForm.propTypes = {
  login: React.PropTypes.func
};

export default reduxForm({
    form: 'login',
    validate
  })(LoginForm);
