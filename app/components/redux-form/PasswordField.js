
import React, { Component } from 'react';
import { Field } from 'redux-form';
import Input from './Input';

export default class PasswordField extends Component {
  constructor(props) {
    super(props);
  }

  focus() {
    this.field.getRenderedComponent().focus();
  }

  render() {
    const { name, placeholder, ...otherProps } = this.props;
    console.log(`typeof(name) = ${name}`);
    return (
      <Field
        name={name || 'password'}
        ref={(field) => this.field = field}
        withRef
        placeholder={placeholder || 'Enter a password'}
        secureTextEntry
        component={Input}
        {...otherProps}
      />
    );
  }
}
