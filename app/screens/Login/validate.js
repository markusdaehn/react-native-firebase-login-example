export default function validate ({email='', password=''}) {
  const error = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  if (email.length < 8 && email !== '') {
    error.email = 'too short';
  }
  if (!email.includes('@') && email !== '') {
    error.email = '@ not included';
  }
  if (password.length > 12) {
    error.password = 'max 11 characters';
  }
  if (password.length < 5 && password.length > 0) {
    error.password = 'Weak';
  }

  return error;
}
