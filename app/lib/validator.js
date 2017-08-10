//import * as emailValidator from 'email-validator';

// Validators
const validateEmail = (email) => {
  if(email){
    const valid = true//emailValidator.validate(email);
    const errors = valid ? undefined : ['Email is invalid.'];

    return {
      valid,
      errors
    };
  }

  return {
    valid: false,
    errors: ['Email is required']
  }
}

const validatePassword = (password) => {
  if(password) {
    if(typeof password !== 'string') {
      return {
        valid: false,
        errors: ['Password must be a string']
      };
    }
    if(password.length < 6) {
      return {
        valid: false,
        errors: ['Password is too weak']
      };
    }
    if(password.length > 30) {
      return {
        valid: false,
        errors: ['Password is too long']
      }
    }

    return { valid: true };
  }

  return {
    valid: false,
    errors:['Password is required']
  };
}

export default {
  validateEmail,
  validatePassword
};
