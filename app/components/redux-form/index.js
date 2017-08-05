import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Item, Icon, Input, Text } from 'native-base';
import { reduxForm as rf } from 'redux-form';

export const reduxForm = rf;

export const ErrorMessage = ({error}) => {
  if(error === undefined) return <Text />

  return (
    <Item style={{ borderColor: 'transparent' }}>
      <Icon active style={{ color: 'red', marginTop: 5 }} name='bug' />
      <Text style={{ fontSize: 15, color: 'red' }}>{error}</Text>
    </Item>
  );
}

export class FormInput extends Component {
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

export const EmailField = (props) => {
  return (<Field
            name='email'
            icon='person'
            placeholder='EMAIL'
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize={'none'}
            component={FormInput}
            {...props}
          />);
}

export class PasswordField extends Component {
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
              component={FormInput}
              {...this.props}
            />);
  }
}
