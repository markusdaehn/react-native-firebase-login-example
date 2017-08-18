// Validation Rules
export const email = fieldName => () => value =>
                           value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
                           ? `The ${fieldName} is invalid`
                           : undefined;
export const required = fieldName => () => value =>
                              !value
                              ? `The ${fieldName} is required`
                              : undefined;
export const minLength = fieldName => length => value =>
                                         value && value.length < length
                                         ? `The ${fieldName} length must be greater than equal to ${length}`
                                         : undefined;
export const maxLength = fieldName => length => value =>
                                        value && value.length > length
                                        ? `The ${fieldName} length must be less than equal to ${length}`
                                        : undefined;
export const alphaNumeric = fieldName => () => value =>
                                        value && /[^a-zA-Z0-9 ]/i.test(value)
                                        ? `The ${fieldName} can only be alphanumeric characters`
                                        : undefined;
export const phoneNumber = fieldName => () => value =>
                                              value && !/^(0|[1-9][0-9]{9})$/i.test(value)
                                              ? 'Invalid phone number, must be 10 digits'
                                              : undefined;
