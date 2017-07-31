import React, { Component } from 'react';
import {
  Item,
  Input,
  Button,
  Icon,
  View,
  Text
} from 'native-base';
import { KeyboardAvoidingView } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import styles from './styles';
import validate from './validate';

const ErrorMessage = ({error}) => {
  if(error === undefined) return <Text />

  return (
    <Item style={{ borderColor: 'transparent' }}>
      <Icon active style={{ color: 'red', marginTop: 5 }} name='bug' />
      <Text style={{ fontSize: 15, color: 'red' }}>{error}</Text>
    </Item>
  );
}

class FormField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { input, name, icon, meta: {error}, ...inputProps} = this.props;
    return (
      <Item error={error !== undefined}>
      <Icon active name={icon} />
      <Input ref='input' {...inputProps} {...input} />
      <ErrorMessage error={error} />
      </Item>
    );
  }
}

const EmailField = (props) => {
  return (<Field
            name='email'
            icon='person'
            placeholder='EMAIL'
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize={'none'}
            component={FormField}
            {...props}
          />);
}

class PasswordField extends Component {
  constructor(props) {
    super(props);
  }

  focus() {
    //@NOTE: Bug with nativebase not having focus. Need to access _root.
    this.refs.password.getRenderedComponent().refs.input._root.focus();
  }

  render() {
    return (<Field
              name='password'
              ref='password'
              withRef
              icon='unlock'
              placeholder='PASSWORD'
              secureTextEntry
              component={FormField}
              {...this.props}
            />);
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {handleSubmit} = this.props;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.bg}>
        <EmailField returnKeyType='next' onSubmitEditing={() => {this.refs.password.focus()}}/>
        <PasswordField ref='password' returnKeyType='go' onSubmitEditing={() => {handleSubmit()}}/>
        <Button style={styles.btn} onPress={handleSubmit}>
        <Text>Login</Text>
        </Button>
      </KeyboardAvoidingView>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func
};

export default reduxForm({
    form: 'login',
    validate
  })(LoginForm);
