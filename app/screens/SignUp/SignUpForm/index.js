import React, {  Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';
import { EmailField, PasswordField, TextField, reduxForm, Form } from '../../../components/redux-form';
import styles from './styles';
import validate from './validate';
import {connect} from 'react-redux';
import {navigate} from '../../../navigators/actions';
import submit from './submit';

export class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  // static propTypes = {
  //   gotoSignIn: PropTypes.func.isRequired,
  // //  submit: PropTypes.func.isRequired,
  // };

  componentWillMount() {
    // @NOTE: This is because the state is being initialized when application is loaded
    this.props.reset();
  }

  render() {
    const { handleSubmit, error, pristine, submitting, gotoSignIn } = this.props;
    const  onSubmit = handleSubmit(submit);

    return (
      <View behavior='padding'>
        <TextField
          name='name'
          placeholder='Name'
          returnKeyType='next'
          onSubmitEditing={() => {this.refs.email.focus()}}
        />
        <EmailField
          ref='email'
          returnKeyType='next'
          onSubmitEditing={() => this.refs.password.focus()}
        />
        <PasswordField
          ref='password'
          placeholder='Create a password (6+ characters)'
          returnKeyType='go'
          onSubmitEditing={onSubmit}
        />
        <Button
          title='Sign Up'
          onPress={onSubmit}
          disabled={pristine || submitting}
          accessibilityLabel='Press to submit sign up form'
        />
        <Button
          title='Got an Account?'
          style={styles.btn}
          onPress={()=>{}}
          disabled={submitting}
          accessibilityLabel='Press to go to sign in screen'
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  gotoSignIn: () => dispatch(navigate({routeName:'SignIn'})),
  //submit,
});

//const connectedSignUpForm = connect(null, mapDispatchToProps)(SignUpForm);

export default reduxForm({
  form: 'signup',
  validate
})(SignUpForm)
