import React, { Component } from 'react';
import { Button, Text, View } from 'native-base';
import { EmailField, PasswordField, reduxForm } from '../../components/redux-form'
import styles from './styles';
import validate from './validate';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // @NOTE: This is because the state is being initialized when application is loaded
    this.props.reset();
  }

  render() {
    const { submitLogin, gotoSignUp, pristine, submitting } = this.props;
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
          onSubmitEditing={() => {submitLogin()}}
        />
        <Button
          style={styles.btn}
          onPress={submitLogin}
          disabled={pristine || submitting}
        >
          <Text>Login</Text>
        </Button>
        <Button
          style={styles.btn}
          onPress={gotoSignUp}
          disabled={submitting}
        >
          <Text>New to Yuzsa?</Text>
        </Button>
      </View>
    );
  }
}

LoginForm.propTypes = {
  submitLogin: React.PropTypes.func,
  gotoSignUp: React.PropTypes.func
};

export default reduxForm({
    form: 'login',
    validate
  })(LoginForm);
