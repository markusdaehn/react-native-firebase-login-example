const validate = values => {
  const error = {};
  error.email = '';
  error.password = '';
  var ema = values.email;
  var pw = values.password;
  if (values.email === undefined) {
    ema = '';
  }
  if (values.password === undefined) {
    pw = '';
  }
  if (ema.length < 8 && ema !== '') {
    error.email = 'too short';
  }
  if (!ema.includes('@') && ema !== '') {
    error.email = '@ not included';
  }
  if (pw.length > 12) {
    error.password = 'max 11 characters';
  }
  if (pw.length < 5 && pw.length > 0) {
    error.password = 'Weak';
  }
  return error;
};

export default validate;
