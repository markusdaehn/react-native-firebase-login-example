import React, { Component } from 'react';
import { Button, View, Text } from 'native-base';
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

  submitSignUp() {
    this.props.createUser({
      email: this.state.email,
      password: this.state.password
    }, (error, userData) => {
      if(error) {
        switch(error.code) {
          case 'EMAIL_TAKEN':
            alert('Email is taken');
            break;
          case 'INVALID_EMAIL':
            alert('Email is invalid');
            break;
          default:
            alert ('Unable to create user');
            break;
        }
      } else {
        alert ('User account');
      }

      this.setState({
        email: '',
        password: '',
        passwordConfirmation: '',
      });
    });
  }

  render() {
    return (
      <View behavior='padding'>
        <EmailField
          returnKeyType='next'
          onSubmitEditing={() => this.refs.password.focus()}
          onChangeText={(text) => this.setState({email: text})}
        />
        <PasswordField
          ref='password'
          returnKeyType='next'
          onSubmitEditing={() => {() => this.refs.passwordConfirmation.focus()}}
          onChangeText={(text) => this.setState({password: text})}
        />
        <PasswordField
          name='passwordConfirmation'
          ref='passwordConfirmation'
          placeholder='CONFIRM PASSWORD'
          returnKeyType='go'
          onSubmitEditing={() => this.submitSignUp()}
          onChangeText={(text) => this.setState({passwordConfirmation: text})}
        />
        <Button
          style={styles.btn}
          onPress={() => this.submitSignUp()}
        >
          <Text>SignUp</Text>
        </Button>
        <Button
          style={styles.btn}
          onPress={() => this.props.goToLogin()}
        >
          <Text>Got an Account?</Text>
        </Button>
      </View>
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
