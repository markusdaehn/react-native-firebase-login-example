import React, { Component } from 'react';
import { Button, View, Text } from 'native-base';
import { EmailField, PasswordField, reduxForm, Form } from '../../components/redux-form';
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
    const { handleSubmit, gotoLogin, pristine, submitting, onSubmit } = this.props;

    return (
      <View behavior='padding'>
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
