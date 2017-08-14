import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Field } from 'redux-form';
import { Item, Icon, Input, Text } from 'native-base';
import { reduxForm as rf, SubmissionError as serr, Form as fm} from 'redux-form';

export const reduxForm = rf;
export const SubmissionError = serr;
export const Form = fm;

export const ErrorMessage = ({error, touched}) => {
  if(error === undefined || !touched) return <Text />

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
    let { input, icon, meta: {error, touched}, ...inputProps} = this.props;
    return (
      <Item error={error !== undefined && touched}>
        <Icon active name={icon} />
        <Input
          ref='input'
          {...inputProps}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
        />
        <ErrorMessage error={error} touched={touched}/>
      </Item>
    );
  }
}

export class EmailField extends Component {
  constructor(props) {
    super(props);
  }

  focus() {
    //@NOTE: Bug with nativebase not having focus. Need to access _root.
    this.refs.email.getRenderedComponent().refs.input._root.focus();
  }

  render() {
    return (
      <Field
        name='email'
        ref='email'
        withRef
        icon='person'
        placeholder='EMAIL'
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize={'none'}
        component={FormInput}
        {...this.props}
      />
    );
  }
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
    const { name, icon, placeholder, ...otherProps } = this.props;

    return (
      <Field
        name={name || 'password'}
        ref='password'
        withRef
        icon={icon || 'unlock'}
        placeholder={placeholder || 'PASSWORD'}
        secureTextEntry
        component={FormInput}
        {...otherProps}
      />
    );
  }
}
