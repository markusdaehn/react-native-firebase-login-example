import React, { Component } from 'react';
import { Field } from 'redux-form';
import Input from './Input';

export default class TextField extends Component {
  constructor(props) {
    super(props);
  }

  focus() {
    this.field.getRenderedcomponent().focus();
  }

  render() {
    const { name, placeholder, ...otherProps } = this.props;

    return (
      <Field
      name={name || 'text'}
      ref={(field) => this.field = field}
      withRef
      placeholder={placeholder || 'Enter text'}
      autoCorrect={false}
      component={Input}
      {...otherProps}
      />
    );
  }
}
