import { email as isEmail, required, minLength, maxLength } from './rules';

// Field Rules
export const password = (() => {
  const fieldName = 'password';

  return Object.freeze({
   fieldName,
   rules: [
             required(fieldName),
             minLength(6, fieldName),
             maxLength(30, fieldName)
          ]
  });
})();

export const email = (() => {
  const fieldName = 'email';

  return Object.freeze({
  fieldName,
  rules: [
            required(fieldName),
            isEmail(fieldName)
         ]
  });
})()
