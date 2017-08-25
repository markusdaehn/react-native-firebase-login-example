import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';
import { EmailField, PasswordField, reduxForm } from '../../components/redux-form'
import styles from './styles';
import validate from './validate';

export class SignInForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { signIn, gotoSignUp, pristine, submitting } = this.props;
    return (
      <View behavior='padding' style={styles.bg}>
        <EmailField
          ref='email'
          returnKeyType='next'
          onSubmitEditing={() => {this.refs.password.focus()}}
        />
        <PasswordField
          ref='password'
          returnKeyType='go'
          onSubmitEditing={() => {signIn()}}
        />
        <Button style={styles.btn} onPress={signIn} disabled={pristine || submitting}>
          <Text>Sign in</Text>
        </Button>
        <Button style={styles.btn} onPress={gotoSignUp} disabled={submitting}>
          <Text>New to Yuzsa?</Text>
        </Button>
      </View>
    );
  }
}

SignInForm.propTypes = {
  signIn: PropTypes.func,
  gotoSignUp: PropTypes.func
};

export default reduxForm({
    form: 'login',
    validate
  })(SignInForm);
