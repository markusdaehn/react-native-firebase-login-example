import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormInput } from 'react-native-elements';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      onBlur: PropTypes.func.isRequired,
      onFocus: PropTypes.func.isRequired,
    }).isRequired,
  }

  focus() {
    return this.input.focus();
  }

  render() {
    let { input, meta, ...otherProps } = this.props;
    return (
        <FormInput
          ref={(input) => this.input = input}
          {...input}
          {...otherProps}
        />
    );
  }
}
