import validator from '../../lib/validator';

export default function validate({email='', password=''}) {
  const error = {
    email: '',
    password: '',
    _error: []
  };

  const emailValidation = validator.validateEmail(email);
  const passwordValidation = validator.validatePassword(password);

  if(!emailValidation.valid) {
    error.email = emailValidation.errors[0];
    error._error = error._error.concat(emailValidation.errors)
  }
  if(!passwordValidation.valid) {
    error.password = passwordValidation.errors[0];
    error._error = error._error.concat(passwordValidation.errors)

  }

  return error;
}
