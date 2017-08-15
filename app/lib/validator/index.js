const email = fieldName => () => value =>
                           value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
                           ? `The ${fieldName} is invalid`
                           : undefined;

const required = fieldName => () => value =>
                              !value
                              ? `The ${fieldName} is required`
                              : undefined;
const minLength = fieldName => length => value =>
                                         value && value.length < length
                                         ? `The ${fieldName} length must be greater than equal to ${length}`
                                         : undefined;

const maxLength = fieldName => length => value =>
                                        value && value.length > length
                                        ? `The ${fieldName} length must be less than equal to ${length}`
                                        : undefined

const addIfError = (fieldName, value, rule, ruleModifier, errors) => {
  errors = Array.isArray(ruleModifier) ? ruleModifier : errors;

  error = rule(fieldName)(ruleModifier)(value)
  if(typeof error === 'string') errors.push(error);
}

const createValidationResult = (errors) => {
  return {
    valid: errors.length === 0,
    errors
  }
}


const validateEmail = (value) => {
  const errors = [];
  const fieldName = 'email';

  addIfError('email', value, required, errors);
  addIfError('email', value, email, errors);

  return createValidationResult(errors);
}

const validatePassword = (value) => {
  const errors = [];
  const fieldName = 'email';

  addIfError('password', value, required, errors);
  addIfError('password', value, minLength, 6, errors);
  addIfError('password', value, maxLength, 30, errors);

  return createValidationResult(errors);
}

export default {
  validateEmail,
  validatePassword
};
