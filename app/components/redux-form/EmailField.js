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
    return (
      <Field
        name='email'
        ref={(field) => this.field = field}
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
