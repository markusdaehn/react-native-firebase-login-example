import React, {  Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';
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
    const { handleSubmit, error, pristine, submitting, onSubmit, gotoSignIn } = this.props;
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
          title='Sign Up'
          onPress={handleSubmit(onSubmit)}
          disabled={pristine || submitting}
          accessibilityLabel='Press to submit sign up form'
        />
        <Button
          title='Got an Account?'
          style={styles.btn}
          onPress={gotoSignIn}
          disabled={submitting}
          accessibilityLabel='Press to go to sign in screen'
        />
      </View>
    );
  }
}

SignUpForm.propTypes = {
  gotoSignIn: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'signup',
  validate
})(SignUpForm)
