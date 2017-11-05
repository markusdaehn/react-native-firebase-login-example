import React, { Component } from 'react';
import { Field } from 'redux-form';
import Input from './Input';

export default class EmailField extends Component {
  constructor(props) {
    super(props);
  }

  focus() {
    this.field.getRenderedComponent().focus();
  }

  render() {
    let {name, placeholder} = this.props
    return (
      <Field
        ref={(field) => this.field = field}
        withRef
        name={name || 'email'}
        placeholder={placeholder || 'Your email address'}
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize={'none'}
        component={Input}
        {...this.props}
      />
    );
  }
}
