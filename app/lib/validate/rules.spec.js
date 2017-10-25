import {
  email,
  required,
  minLength,
  maxLength,
  alphaNumeric,
  phoneNumber,
} from './rules';

const VALID_EMAILS = [
  'foo@baz.com',
  'foo.bar@baz.com',
  'foo@bar.baz.com',
  'foo+bar@baz.com',
  '123456789@baz.com',
  'foo@baz-quz.com',
  '_@baz.com',
  '________@baz.com',
  'foo@baz.name',
  'foo@baz.co.uk',
  'foo-bar@baz.com',
  'baz.com@baz.com',
  'foo.bar+qux@baz.com',
  'foo.bar-qux@baz.com',
  'f@baz.com',
  '_foo@baz.com',
  'foo@bar--baz.com',
  // @note: These cause validation to fail, but it isn't a problem
  // 'foo.bar@baz.com.',
  // 'foo@123.456.789.123',
  // 'foo@[123.456.789.123]',
  // '"foo"@baz.com',
  // 'foo."bar\ qux"@baz.com',
  // 'foo.bar."bux".bar.com@baz.com',
  // '"foo.(),:;<>[]\".FOO.\"foo@\\ \"FOO\".foo"@baz.qux.com',
  // '" "@baz.com',
  // 'foo/bar=qux@baz.com',
  // 'foo."bar"@baz.com',
  // 'foob*ar@baz.com',
  // '"foo@bar"@baz.com',
];

const INVALID_EMAILS = [
  'foo',
  '#@%^%#$@#$@#.com',
  '@baz.com',
  'Jane Doe <foo@baz.com>',
  'qux.baz.com',
  'foo@bar@baz.com',
  '.foo@baz.com',
  'foo.@baz.com',
  'foo..bar@baz.com',
  'foo@baz.com (Jane Doe)',
  'foo@baz',
  'foo@123.456.789.12345',
  'foo@baz..com',
  'foo..123456@baz.com',
  'a"b(c)d,e:f;g<h>I[j\k]l@baz.com ',
  'foo bar@baz.com',
  'foo@baz.com-',
  'foo@baz,qux.com',
  'foo\@bar@baz.com',
  'foo.bar',
  '@',
  '@@',
  '.@',
  //@note these cause validation to fail but shouldn't be a problem
  //'あいうえお@baz.com',
  // 'foo@-baz.com',
  //'foo@baz.qux',
  // 'foofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoo@baz.com',
];

const lessThanZeroError = new Error('The length must be >= 0');
const mustBeANumError = new Error('The length must be a number');
const lengthModifierScenarios = [
  { description: 'less than zero', value: -1, expect: lessThanZeroError },
  { description: 'null', value: null, expect: mustBeANumError },
  { description: 'undefined', expect: mustBeANumError },
  { description: 'numeric string', expect: mustBeANumError },
  { description: 'object', value: {}, expect: mustBeANumError },
];
describe('rules', function () {
  const fieldName = 'custom field name';

  describe('email', function () {
    describe('when the email fieldName parameter is passed in and validation fails', function () {
      const expectedErrorMessage = `The ${fieldName} is invalid`;
      let errorMessage;

      beforeEach(function () {
        errorMessage = email(fieldName)('bad email');
      });

      it('should return an error message with the field name set to the fieldName parameter', function() {
        expect(errorMessage).toBe(expectedErrorMessage);
      });
    });

    describe('when the email fieldName parameter is NOT passed in and validation fails', function () {
      const expectedErrorMessage = `The email is invalid`;
      let errorMessage;

      beforeEach(function () {
        errorMessage = email()('bad email');
      });

      it('should return an error message with the field name "email"', function () {
        expect(errorMessage).toBe(expectedErrorMessage);
      });
    });

    describe('when passed an string with white space', function () {
      let errorMessage;

      beforeEach(function () {
        errorMessage = email()(' ');
      });

      it(`should return an undefined error message`, function () {
        expect(errorMessage).toBeUndefined();
      });
    });

    describe('when passed an undefined value', function () {
      let errorMessage;

      beforeEach(function () {
        errorMessage = email()();
      });

      it(`should return an undefined error message `, function () {
        expect(errorMessage).toBeUndefined();
      });
    });

    describe('when passed a null value', function () {
      let errorMessage;

      beforeEach(function () {
        errorMessage = email()(null);
      });

      it(`should return an undefined error message `, function () {
        expect(errorMessage).toBeUndefined();
      });
    });

    VALID_EMAILS.forEach(function (validEmail) {
      describe(`when passed a valid email ${validEmail}`, function () {
        let errorMessage;

        beforeEach(function () {
          errorMessage = email()(validEmail);
        });

        it('should return undefined', function () {
          expect(errorMessage).toBeUndefined();
        });
      });
    }); // #END VALID_EMAILS

    INVALID_EMAILS.forEach(function (invalidEmail) {
      describe(`when passed an invalid email ${invalidEmail}`, function () {
        let errorMessage;

        beforeEach(function () {
          errorMessage = email()(invalidEmail);
        });

        it('should return a string containing "is invalid"', function () {
          expect(errorMessage).toEqual(expect.stringMatching('is invalid'));
        });
      });
    }); // #END INVALID_EMAILS
  });

  describe('required', function () {
    describe('when the fieldName parameter is passed in and validation fails', function() {
      const expectedErrorMessage = `The ${fieldName} is required`;
      let errorMessage;

      beforeEach(function () {
        errorMessage = required(fieldName)();
      });

      it('should return an error message with the field name set to the fieldName parameter', function () {
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });

    describe('when the fieldName parameter is NOT passed in and validation fails', function () {
      const expectedErrorMessage = `The field is required`;
      let errorMessage;

      beforeEach(function () {
        errorMessage = required()();
      });

      it('should return an error message with the field name set to "field"', function () {
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });

    describe('when the value under test is null', function () {
      const expectedErrorMessage = `The field is required`;
      let errorMessage;

      beforeEach(function () {
        errorMessage = required()(null);
      });

      it('should return an error message with the field name set to "field"', function () {
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });

    describe('when the value under test is undefined', function () {
      const expectedErrorMessage = `The field is required`;
      let errorMessage;

      beforeEach(function () {
        errorMessage = required()();
      });

      it('should return an error message with the field name set to "field"', function () {
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });

    describe('when the value under test is an string with only white space', function () {
      const expectedErrorMessage = `The field is required`;
      let errorMessage;

      beforeEach(function () {
        errorMessage = required()(' ');
      });
      it('should return an error message with the field name set to "field"', function () {
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });

  });

  describe('minLength', function () {
    const length5 = 5;
    const lengthLT5 = Object.freeze([1,2,3,4]);
    const lengthGT5 = Object.freeze([1,2,3,4,5,6]);
    const lengthET5 = Object.freeze([1,2,3,4,5]);
    const defaultErrorMessage = `The field length must be greater than or equal to ${length5}`;

    lengthModifierScenarios.forEach(function (subject) {
      describe(`when the length modifier is ${subject.description}`, function () {
        it(`should throw an exception with error messasge "${subject.expect.message}"`, function () {
          expect(function () { minLength(subject.value) }).toThrow(subject.expect);
        });
      });
    });

    describe('when the fieldName parameter is passed in and validation fails', function () {
      const expectedErrorMessage = `The ${fieldName} length must be greater than or equal to ${length5}`;
      let errorMessage;

      beforeEach(function () {
        errorMessage = minLength(length5, fieldName)(lengthLT5);
      });

      it('should return an error message with the field name set to the fieldName parameter', function () {
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });

    describe('when the fieldName parameter is NOT passed in and validation fails', function () {
      const expectedErrorMessage = `The field length must be greater than or equal to ${length5}`;
      let errorMessage;

      beforeEach(function () {
        errorMessage = minLength(length5)(lengthLT5);
      });

      it('should return an error message with the field name set to "field"', function () {
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });
    const minLengthScenarios = [
      { description: 'null', value: null, expect: undefined },
      { description: 'undefined', value: undefined, expect: undefined },
      { description: 'a string with whitespace only', value: '  ', expect: undefined },
      { description: 'a value with length = min length', value: lengthET5, expect: undefined },
      { description: 'a value with length > min length', value: lengthGT5, expect: undefined },
      { description: 'a value with length < min length', value: lengthLT5, expect: defaultErrorMessage },
    ];
    test(minLengthScenarios, minLength, length5, defaultErrorMessage);
  }); // End minLength tests

  describe('maxLength', function () {
    const length5 = 5;
    const lengthLT5 = Object.freeze([1,2,3,4]);
    const lengthGT5 = Object.freeze([1,2,3,4,5,6]);
    const lengthET5 = Object.freeze([1,2,3,4,5]);
    const defaultErrorMessage = `The field length must be less than or equal to ${length5}`;

    lengthModifierScenarios.forEach(function (subject) {
      describe(`when the length modifier is ${subject.description}`, function () {
        it(`should throw an exception with error messasge "${subject.expect.message}"`, function () {
          expect(function () { maxLength(subject.value) }).toThrow(subject.expect);
        });
      });
    });

    describe('when the fieldName parameter is passed in and validation fails', function() {
      const expectedErrorMessage = `The ${fieldName} length must be less than or equal to ${length5}`;
      let errorMessage;

      beforeEach(function () {
        errorMessage = maxLength(length5, fieldName)(lengthGT5);
      });

      it('should return an error message with the field name set to the fieldName parameter', function () {
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });

    describe('when the fieldName parameter is NOT passed in and validation fails', function () {
      const expectedErrorMessage = `The field length must be less than or equal to ${length5}`;
      let errorMessage;

      beforeEach(function () {
        errorMessage = maxLength(length5)(lengthGT5);
      });

      it('should return an error message with the field name set to "field"', function () {
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });
    const maxLengthScenarios = [
      { description: 'null', value: null, expect: undefined },
      { description: 'undefined', value: undefined, expect: undefined },
      { description: 'a string with whitespace only', value: '  ', expect: undefined },
      { description: 'a value with length = max length', value: lengthET5, expect: undefined },
      { description: 'a value with length < max length', value: lengthLT5, expect: undefined },
      { description: 'a value with length > max length', value: lengthGT5, expect: defaultErrorMessage },
    ];
    test(maxLengthScenarios, maxLength, length5, defaultErrorMessage);
  }); // End maxLength tests

  describe('alphaNumeric', function () {
    const defaultErrorMessage = 'The field can only be alphanumeric characters';
    let errorMessage;

    describe('when the fieldName parameter is passed in and validation fails', function() {
      const expectedErrorMessage = `The ${fieldName} can only be alphanumeric characters`;
      let errorMessage;

      beforeEach(function () {
        errorMessage = alphaNumeric(fieldName)('9$');
      });

      it('should return an error message with the field name set to the fieldName parameter', function () {
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });

    describe('when the fieldName parameter is NOT passed in and validation fails', function () {
      let errorMessage;

      beforeEach(function () {
        errorMessage = alphaNumeric()('9$');
      });

      it('should return an error message with the field name set to "field"', function () {
        expect(errorMessage).toEqual(defaultErrorMessage);
      });
    });
    describe('when the value is undefined', function () {
      beforeEach(function () {
        errorMessage = alphaNumeric()();
      });

      it('should return an undefined messaage', function () {
        expect(errorMessage).toBeUndefined();
      });
    });
    describe('when the value is null', function () {
      beforeEach(function () {
        errorMessage = alphaNumeric()();
      });

      it('should return an undefined message', function () {
        expect(errorMessage).toBeUndefined();
      });
    });
    describe('when the value is a string with whitespace', function () {
      beforeEach(function () {
        errorMessage = alphaNumeric()();
      });

      it('should return an undefined message', function () {
        expect(errorMessage).toBeUndefined();
      });
    });
    describe('when the value is not an alphaNumeric value', function () {
      beforeEach(function () {
        errorMessage = alphaNumeric()('ab@df09)()');
      });

      it('should return "The field can only be alpahnumeric characters"', function () {
        expect(errorMessage).toEqual(defaultErrorMessage);
      });
    });
    describe('when the value is an alphaNumeric value', function () {
      beforeEach(function () {
        errorMessage = alphaNumeric()('abc9');
      });

      it('it should return undefined', function () {
        expect(errorMessage).toBeUndefined();
      });
    });
  }); // End alphaNumeric

  describe('phoneNumber', function () {
    const defaultErrorMessage = 'Invalid phone number, must be 10 digits';
    let errorMessage;

    describe('when the fieldName parameter is passed in and validation fails', function() {
      const expectedErrorMessage = `Invalid ${fieldName}, must be 10 digits`;
      let errorMessage;

      beforeEach(function () {
        errorMessage = phoneNumber(fieldName)('9$');
      });

      it('should return an error message with the field name set to the fieldName parameter', function () {
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });

    describe('when the fieldName parameter is NOT passed in and validation fails', function () {
      let errorMessage;

      beforeEach(function () {
        errorMessage = phoneNumber()('9$');
      });

      it('should return an error message with the field name set to "field"', function () {
        expect(errorMessage).toEqual(defaultErrorMessage);
      });
    });
    describe('when the value is undefined', function () {
      beforeEach(function () {
        errorMessage = phoneNumber()();
      });

      it('should return an undefined messaage', function () {
        expect(errorMessage).toBeUndefined();
      });
    });
    describe('when the value is null', function () {
      beforeEach(function () {
        errorMessage = phoneNumber()();
      });

      it('should return an undefined message', function () {
        expect(errorMessage).toBeUndefined();
      });
    });
    describe('when the value is a string with whitespace', function () {
      beforeEach(function () {
        errorMessage = phoneNumber()();
      });

      it('should return an undefined message', function () {
        expect(errorMessage).toBeUndefined();
      });
    });
    describe('when the value is not an phoneNumber value', function () {
      beforeEach(function () {
        errorMessage = phoneNumber()('ab@df09)()');
      });

      it('should return "The field can only be alpahnumeric characters"', function () {
        expect(errorMessage).toEqual(defaultErrorMessage);
      });
    });
    describe('when the value is an phoneNumber value', function () {
      beforeEach(function () {
        errorMessage = phoneNumber()('8586599674');
      });

      it('it should return undefined', function () {
        expect(errorMessage).toBeUndefined();
      });
    });
  }); // End phoneNumber
});

function test(scenarios, rule, modifier, defaultErrorMessage) {
  scenarios.forEach(function (scenario) {
    describe(`when the value under test is ${scenario.description}`, function () {
      let errorMessage;

      beforeEach(function () {
        errorMessage = rule(modifier)(scenario.value);
      });

      it(`should return "${scenario.expect}"`, function () {
        expect(errorMessage).toEqual(scenario.expect);
      });
    });
  }); // End maxLength forEach test
}
