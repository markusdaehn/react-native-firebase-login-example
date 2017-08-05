import React, { Component } from 'react';
import { Button, View, Text } from 'native-base';
import { EmailField, PasswordField, reduxForm } from '../../components/redux-form'
import styles from './styles';
import validate from './validate';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { submitLogin, gotoSignUp } = this.props;
    return (
      <View behavior='padding' style={styles.bg}>
        <EmailField returnKeyType='next' onSubmitEditing={() => {this.refs.password.focus()}}/>
        <PasswordField ref='password' returnKeyType='go' onSubmitEditing={() => {submitLogin()}}/>
        <Button style={styles.btn} onPress={submitLogin}>
          <Text>Login</Text>
        </Button>
        <Button
          style={styles.btn}
          onPress={gotoSignUp}
        >
          <Text>New here?</Text>
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
