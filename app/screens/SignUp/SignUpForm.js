import React, { Component } from 'react';
import { Button, View, Text, Form } from 'native-base';
import { EmailField, PasswordField, reduxForm, SubmissionError } from '../../components/redux-form';
import styles from './styles';
import validate from './validate';

export class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  submitSignUp(values) {
    const { email, password } = values;
    const _error =  'Failed to create account';

    return this.props.createUser(email, password)
      .then((user) => {
        this.props.gotoHome()
      })
      .catch((error) => {
        if(!error) throw new Error('Unknown error.')
        switch(error.code) {
          case 'auth/email-already-in-use':
            throw new SubmissionError({
              email: 'Email is taken',
              _error
            });
          case 'auth/invalid-email':
            throw new SubmissionError({
              email: 'Email is invalid',
              _error
            });
          case 'auth/operation-not-allowed':
            throw new SubmissionError({
              _error: 'Email login not enabled'
            });
          case 'auth/weak-password':
            throw new SubmissionError({
              email: 'Password is too weak',
              _error
            });
          default:
            throw new Error(error.message || 'Unknown error.');
        }
      });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form behavior='padding'>
        <EmailField
          ref='email'
          returnKeyType='next'
          onSubmitEditing={() => this.refs.password.focus()}
        />
        <PasswordField
          ref='password'
          returnKeyType='go'
          onSubmitEditing={this.props.handleSubmit(this.submitSignUp.bind(this))}
        />
        <Button
          style={styles.btn}
          onPress={this.props.handleSubmit(this.submitSignUp.bind(this))}
        >
          <Text>SignUp</Text>
        </Button>
        <Button
          style={styles.btn}
          onPress={() => this.props.gotoLogin()}
        >
          <Text>Got an Account?</Text>
        </Button>
      </Form>
    );
  }
}

SignUpForm.propTypes = {
  gotoHome: React.PropTypes.func,
  gotoLogin: React.PropTypes.func,
  createUser: React.PropTypes.func
}

export default reduxForm({
  form: 'signup',
  validate
})(SignUpForm)
