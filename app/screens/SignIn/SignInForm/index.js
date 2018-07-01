import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';
import { EmailField, PasswordField, reduxForm } from '../../../components/redux-form'
import styles from './styles';
import validate from './validate';
import { connect } from 'react-redux';
import { navigate } from '../../../navigators/actions';
import { signIn } from '../actions';

//@NOTE: This is a class because we have a ref property
export class SignInForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { signIn, gotoSignUp, pristine, submitting, handleSubmit } = this.props;
    const  onSubmit = handleSubmit(signIn);

    return (
      <View behavior='padding' style={styles.bg}>
        <EmailField
          ref='email'
          returnKeyType='next'
          onSubmitEditing={() => {this.refs.password.focus()}}
        />
        <PasswordField
          ref='password'
          returnKeyType='go'
          onSubmitEditing={onSubmit}
        />
        <Button
          title='Sign In'
          onPress={onSubmit}
          disabled={pristine || submitting}
          accessibilityLabel='Press to submit sign in form'
        />
        <Button
          title='Sign Up'
          onPress={gotoSignUp}
          disabled={submitting}
          accessibilityLabel='Go to sign up screen'
        />
      </View>
    );
  }
}

SignInForm.propTypes = {
  signIn: PropTypes.func.isRequired,
  gotoSignUp: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  signIn: ({email, password}) => dispatch(signIn({email, password})),
  gotoSignUp: () => dispatch(navigate({routeName:'SignUp'})),
});

const WrappedSignInForm = connect(null, mapDispatchToProps)(SignInForm);

export default reduxForm({
    form: 'login',
    validate
  })(WrappedSignInForm);
