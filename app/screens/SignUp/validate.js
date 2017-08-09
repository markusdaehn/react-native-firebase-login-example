import validator from '../../lib/validator';

export default function validate({email='', password=''}) {
  const error = {
    email: '',
    password: '',
  };

  const emailValidation = validator.validateEmail(email);
  const passwordValidation = validator.validatePassword(password);

  if(!emailValidation.valid) {
    error.email = emailValidation.errors[0];
  }
  if(!passwordValidation.valid) {
    error.password = passwordValidation.errors[0];
  }

  return error;
}
