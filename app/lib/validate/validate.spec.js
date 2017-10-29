import {
  rules as rulesCollection,
  fieldRules,
  validateValue,
  validateFieldInValues,
  isValidationResultWithErrors,
  reduceFieldValidationResults,
  validateFieldValues,
 } from './validate';

describe('validate', function () {
  const { required, email, minLength, alphaNumeric } = rulesCollection;
  const rules = [required(), email(), minLength(6), alphaNumeric()];
  describe('validateValue(rules, value)', function () {
    describe('when validation rules are email, minLength, and alphaNumeric', function () {
      const validate = validateValue(rules);
      const expectedRequiredValidationErrors = ['The field is required'];

      const valueNotProvidedScenarios = [
        { description: 'a string with whitespace', value: '  ', expected: expectedRequiredValidationErrors },
        { description: 'null', value: null, expected: expectedRequiredValidationErrors },
        { description: 'undefined', expected: expectedRequiredValidationErrors },
        { description: 'an invalid email, with length less than min length and not alphNumeric', value: 'a@g.c', expected: ['The email is invalid', 'The field length must be greater than or equal to 6', 'The field can only be alphanumeric characters'] },
        { description: 'a valid email that is longer than or equal to 6', value: 'abc78@gmail.com', expected: ['The field can only be alphanumeric characters'] },
      ].forEach(function (scenario) {
        describe(`and the the value is ${scenario.description}`, function () {
          let validationResult;
          beforeEach(function () {
            validationResult = validate(scenario.value);
          });
          it(`should return the error "${scenario.expected}"`, function () {
            expect(validationResult).toEqual(scenario.expected);
          });
        });
      }); // #END Test for value not provided when required
    }); // #End when describe block
    describe('when the validation rules is undefine', function () {
      const validate = validateValue();
      let validationResult;
      beforeEach(function () {
        validationResult = validate();
      });
      it('should return an empty validation result', function () {
        expect(validationResult).toEqual([]);
      });
    });
  }); // #End validateValue(rules, value)
  describe('isValidationResultWithErrors({ fieldName, errors } = {})', function () {
    [
      { description: 'an undefined validation result', expected: false },
      { description: 'valid with errors', value: { fieldName: 'email', errors: ['an error'] }, expected: true },
      { description: 'valid with no errors', value: { fieldName: 'email', errors: []}, expected: false },
      { description: 'an object with only the fieldName defined', value: { fieldName: 'email' }, expected: false },
    ].forEach(function (scenario) {
      describe(`when passed a validation result that is ${scenario.description}`, function () {
        let result;
        beforeEach(function () {
          result = isValidationResultWithErrors(scenario.value);
        });
        it(`should return ${scenario.expected}`, function () {
          expect(result).toBe(scenario.expected);
        });
      });
    });
  }); // #END isValidationResultWithErrors
  describe('reduceFieldValidationResults(validationResults)', function () {
    let errorResult;
    describe('when passed an array of validation results', function () {
      const validationResults = [
        {
          fieldName: fieldRules.email.fieldName,
          rules: fieldRules.email.rules,
          value: 'a@g.c',
          errors: ['The email is invalid', 'The email length must be greater than or equal to 6', 'The email can only be alphanumeric characters']
        },
        {
          fieldName: fieldRules.password.fieldName,
          rules: fieldRules.password.fieldName,
          value: '13d',
          errors: ['The password length must be greater than or equal to 6']
        },
        {invalid:'validationResult'}
      ];

      const expected = {
        [fieldRules.email.fieldName]: validationResults.find(r => r.fieldName === fieldRules.email.fieldName).errors[0],
        [fieldRules.password.fieldName]: validationResults.find(r => r.fieldName === fieldRules.password.fieldName).errors[0],
        '_errors': validationResults.reduce((errors, r) => errors.concat(r.errors || []), []),
      };

      let errorResult;
      beforeEach(function () {
        errorResult = reduceFieldValidationResults(validationResults);
      });

      it('should return an error object with an email property set the first email validation error', function () {
        expect(errorResult.email).toEqual(expected.email);
      });

      it('should return an error object with an password property set the first password validation error', function () {
        expect(errorResult.password).toEqual(expected.password);
      });

      it('should return an object with an _errors property with all the validation errors', function () {
        expect(errorResult._errors).toEqual(expected._errors);
      });
    });
    describe('when the validationResults is not an Array', function () {
      beforeEach(function () {
        errorResult = reduceFieldValidationResults();
      });

      it('should return an error result object with on the _errors property set to an empty array', function() {
        expect(errorResult).toEqual({ _errors: [] });
      });
    });
  }); // #end reduceFieldValidationResults
  describe('validateFieldInValues(validateValue, values, {fieldName, rules})', function () {
    let result;
    describe('when given a fieldName, rules, and values with fieldName property', function () {
      const fieldName = 'email';
      const errors = ['error 1', 'error 2', 'error 3'];
      const validateValueStub = jest.fn().mockReturnValue(errors);
      const createValidateStub = jest.fn().mockReturnValue(validateValueStub);
      const value = 'email@gmail.com';
      const values = { [fieldName]: value };
      beforeEach(function () {
        result = validateFieldInValues(createValidateStub, values, { fieldName, rules });
      });
      it('should pass rules to the validateValue(rules)(value) method', function () {
        expect(createValidateStub).toBeCalledWith(rules);
      });
      it('should pass the given field value from the values object', function () {
        expect(validateValueStub).toBeCalledWith(values[fieldName]);
      });
      it('should return the expected field validation results', function () {
        expect(result).toEqual({ fieldName, rules, value, errors });
      });
    });
  }); // #END validateFieldInValues
  describe('validateFieldValues(fieldRulesCollection, values)', function () {
    const values = {
      email: 'a_bad_email',
      password: 'short',
    };
    const emailError = 'The email is invalid';
    const passwordError = 'The password length must be greater than or equal to 6';
    const validate = validateFieldValues([fieldRules.email, fieldRules.password]);
    let validationResult;
    beforeEach(function () {
      validationResult = validate(values);
    });
    it('should return a validation result with an email property with the expected error', function () {
      expect(validationResult.email).toEqual(emailError);
    });
    it('should return a validation result with an password proerty with the expected error', function () {
      expect(validationResult.password).toEqual(passwordError);
    });
    it('should return a validation result with an _errors property array containing an email and password errors', function () {
      expect(validationResult._errors).toEqual(expect.arrayContaining([emailError, passwordError]))
    });
  }); // #END validateFieldValues
});
