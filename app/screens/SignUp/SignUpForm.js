import React, { Component } from 'react';
import { Button, View, Text, Form } from 'native-base';
import { EmailField, PasswordField, reduxForm } from '../../components/redux-form';
import styles from './styles';
import validate from './validate';

export class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, gotoLogin, onSubmit} = this.props;

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
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        <Button
          style={styles.btn}
          onPress={handleSubmit(onSubmit)}
        >
          <Text>SignUp</Text>
        </Button>
        <Button
          style={styles.btn}
          onPress={gotoLogin}
        >
          <Text>Got an Account?</Text>
        </Button>
      </Form>
    );
  }
}

SignUpForm.propTypes = {
  gotoLogin: React.PropTypes.func,
}

export default reduxForm({
  form: 'signup',
  validate
})(SignUpForm)
