import React, { Component } from 'react';
import { Text } from 'react-native';
import { Field } from 'redux-form';
import { FormInput } from 'react-native-elements';

export { reduxForm, SubmissionError, Form } from 'redux-form';

export class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { input, meta: {error, touched}, ...inputProps} = this.props;
    return (
        <FormInput
          ref='input'
          {...inputProps}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
        />
    );
  }
}
export class TextField extends Component {
  constructor(props) {
    super(props);
  }

  focus() {
    this.refs.text.getRenderedcomponent().refs.input.focus();
  }

  render() {
    const {name, placeholder, ...otherProps} = this.props;

    return (
      <Field
      name={name || 'text'}
      ref='text'
      withRef
      placeholder={placeholder || 'Enter text'}
      autoCorrect={false}
      component={Input}
      {...otherProps}
      />
    );
  }
}
export class EmailField extends Component {
  constructor(props) {
    super(props);
  }

  focus() {
    this.refs.email.getRenderedComponent().refs.input.focus();
  }

  render() {
    return (
      <Field
        name='email'
        ref='email'
        withRef
        placeholder='Your email address'
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize={'none'}
        component={Input}
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
    this.refs.password.getRenderedComponent().refs.input.focus();
  }

  render() {
    const { name, placeholder, ...otherProps } = this.props;

    return (
      <Field
        name={name || 'password'}
        ref='password'
        withRef
        placeholder={placeholder || 'Enter a password'}
        secureTextEntry
        component={Input}
        {...otherProps}
      />
    );
  }
}
