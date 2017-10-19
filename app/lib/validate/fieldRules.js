import { email as isEmail, required, minLength, maxLength } from './rules';

// Field Rules
export const password = (() => {
  const fieldType = 'password';

  return Object.freeze({
   fieldType,
   rules: [
             required(fieldType),
             minLength(6, fieldType),
             maxLength(30, fieldType)
          ]
  });
})();

export const email = (() => {
  const fieldType = 'email';

  return Object.freeze({
  fieldType,
  rules: [
            required(fieldType),
            isEmail(fieldType)
         ]
  });
})()
