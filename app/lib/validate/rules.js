// Validation Rules
export const email = fieldName =>
                         value =>
                           value && !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(value)
                           ? `The ${fieldName || 'email'} is invalid`
                           : undefined;

export const required = fieldName =>
                            value =>
                              value === null || value === undefined || (typeof value === 'string' && value.trim() === '')
                              ? `The ${fieldName || 'field'} is required`
                              : undefined;

export const minLength = (length, fieldName) =>
                             value => {
                               assertLength(length);

                               if (!value || typeof value.length !== 'number' || value.length >= length) {
                                 return;
                               }

                               return `The ${fieldName || 'field'} length must be greater than or equal to ${length}`;
                             };

export const maxLength = (length, fieldName) =>
                             value => {
                               assertLength(length);

                               if(!value || typeof value.length !== 'number' || value.length <= length) {
                                 return;
                               }

                               return  `The ${fieldName || 'field'} length must be less than or equal to ${length}`;
                            };


export const alphaNumeric = fieldName =>
                                value =>
                                  value && /[^a-zA-Z0-9 ]/i.test(value)
                                  ? `The ${fieldName || 'field'} can only be alphanumeric characters`
                                  : undefined;

export const phoneNumber = fieldName =>
                               value =>
                                  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
                                  ? `Invalid ${fieldName || 'phone number'}, must be 10 digits`
                                  : undefined;


function assertLength(length) {
  if (typeof length !== 'number')  {
    throw new Error('The length must be a number');
  }

  if (length < 0) {
    throw new Error('The length must be >= 0');
  }
}
