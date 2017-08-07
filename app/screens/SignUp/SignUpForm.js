import React, { Component } from 'react';
import { Button, View, Text, Form } from 'native-base';
import { EmailField, PasswordField, reduxForm } from '../../components/redux-form';
import styles from './styles';
import validate from './validate';

export class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  submitSignUp(values) {
    const { email, password } = values;

    this.props.createUser(email, password)
      .then((user) => {
        alert('User created ' + user);
      })
      .catch((error) => {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert('Email is taken');
            break;
          case 'auth/invalid-email':
            alert('Email is invalid');
            break;
          case 'auth/operation-not-allowed':
            alert('Email and password login not enabled');
            break;
          case 'auth/weak-password':
            alert('Password is too weak');
            break;
          default:
            alert (error.message || 'An unknown error occurred');
            break;
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
          returnKeyType='next'
          onSubmitEditing={() => {() => this.refs.passwordConfirmation.focus()}}
        />
        <PasswordField
          name='passwordConfirmation'
          ref='passwordConfirmation'
          placeholder='CONFIRM PASSWORD'
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
          onPress={() => this.props.goToLogin()}
        >
          <Text>Got an Account?</Text>
        </Button>
      </Form>
    );
  }
}

SignUpForm.propTypes = {
  submitSignUp: React.PropTypes.func,
  createUser: React.PropTypes.func
}

export default reduxForm({
  form: 'signup',
  validate
})(SignUpForm)
