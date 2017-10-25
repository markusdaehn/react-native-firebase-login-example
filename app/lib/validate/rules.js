// Validation Rules
export const email = fieldName =>
                         value => {
                           value = trimString(value);
                           if (hasStringValue(value) && !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(value)) {
                             return `The ${fieldName || 'email'} is invalid`;
                           }
                         };

export const required = fieldName =>
                            value => {
                              value = trimString(value);
                              if (!hasValue(value)) {
                                return `The ${fieldName || 'field'} is required`;
                              }
                            }

export const minLength = (length, fieldName) => {
                             assertLength(length);
                             return value => {
                               value = trimString(value);
                               if (isArrayLikeObject(value) && value.length < length) {
                                 return `The ${fieldName || 'field'} length must be greater than or equal to ${length}`;
                               }
                             };
                           }

export const maxLength = (length, fieldName) => {
                            assertLength(length);
                            return value => {
                               value = trimString(value);
                               if(isArrayLikeObject(value) && value.length > length) {
                                 return `The ${fieldName || 'field'} length must be less than or equal to ${length}`;
                               }
                            };
                          }


export const alphaNumeric = fieldName =>
                                value => {
                                  value = trimString(value);
                                  if (value && /[^a-zA-Z0-9 ]/i.test(value)) {
                                    return `The ${fieldName || 'field'} can only be alphanumeric characters`;
                                  }
                                }

export const phoneNumber = fieldName =>
                               value => {
                                  value = trimString(value);
                                  if(value && !/^(0|[1-9][0-9]{9})$/i.test(value)) {
                                    return `Invalid ${fieldName || 'phone number'}, must be 10 digits`;
                                  }
                                };


function assertLength(length) {
  if (typeof length !== 'number')  {
    throw new Error('The length must be a number');
  }

  if (length < 0) {
    throw new Error('The length must be >= 0');
  }
}

function hasStringValue(value) {
  return typeof value === 'string' && value.trim() !== '';
}

function isArrayLikeObject(value) {
  return value && typeof value.length === 'number';
}

function hasValue(value) {
  return !(value === null || typeof value === 'undefined' || (typeof value === 'string' && value.trim() === ''));
}

function trimString(str) {
  return typeof str === 'string' ? str.trim() : str;
}
