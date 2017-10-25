import * as rules from './rules';
import * as fieldRules from './fieldRules';
import {curry, pipe} from 'rambda';

const validateFieldValues = curry((fieldRulesCollection, values) => {
  return pipe (
    map(validateFieldInValues(validateValue, values)),
    reduceFieldValidationResults,
  )(fieldRulesCollection);
});

const validateFieldInValues = curry((validateValue, values, {fieldName, rules}) => {
    const value = values[fieldName];
    return {
      fieldName,
      rules,
      value,
      errors: validateValue(rules)(value),
    };
 });

const reduceFieldValidationResults = (validationResults) => {
  if(!Array.isArray(validationResults)) return { _errors: [] };

  return Object.freeze(validationResults.reduce((error, validationResult) => {
    if(isValidationResultWithErrors(validationResult)) {
       error[validationResult.fieldName] = validationResult.errors[0];
       error._errors = (error._errors || []).concat(validationResult.errors);
    }
    return error;
  }, {}));
}

const isValidationResultWithErrors = ({ fieldName, errors } = {}) => {
  return !!(fieldName && errors && errors.length > 0);
}

const validateValue = (rules=[]) => value => rules.map((rule) => rule(value)).filter((e) => typeof e === 'string');

export { rules, fieldRules, validateValue, validateFieldInValues, reduceFieldValidationResults, validateFieldValues, isValidationResultWithErrors };
export default validateFieldValues;
