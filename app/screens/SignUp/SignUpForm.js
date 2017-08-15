import React, { Component } from 'react';
import { Button, View, Text } from 'native-base';
import { EmailField, PasswordField, TextField, reduxForm, Form } from '../../components/redux-form';
import styles from './styles';
import validate from './validate';

export class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // @NOTE: This is because the state is being initialized when application is loaded
    this.props.reset();
  }

  render() {
    const { handleSubmit, error, pristine, submitting, onSubmit, gotoLogin } = this.props;
    alert('error=' + JSON.stringify(error))
    return (
      <View behavior='padding'>
        <TextField
          name='name'
          placeholder='Name'
          returnKeyType='next'
          onSubmitEditing={() => {this.refs.email.focus()}}
        />
        <EmailField
          ref='email'
          returnKeyType='next'
          onSubmitEditing={() => this.refs.password.focus()}
        />
        <PasswordField
          ref='password'
          placeholder='Create a password (6+ characters)'
          returnKeyType='go'
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        <Button
          style={styles.btn}
          onPress={handleSubmit(onSubmit)}
          disabled={pristine || submitting}
        >
          <Text>SignUp</Text>
        </Button>
        <Button
          style={styles.btn}
          onPress={gotoLogin}
          disabled={submitting}
        >
          <Text>Got an Account?</Text>
        </Button>
      </View>
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
