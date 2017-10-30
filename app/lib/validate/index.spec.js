import validate, { rules, fieldRules, validateValue, validateFieldValues } from './index';

describe.only('validate/index', function () {
  const expectedExports = [
    {
      subject: rules,
      description: 'rules',
      expectedType: 'object',
    },
    {
      subject: fieldRules,
      description: 'fieldRules',
      expectedType: 'object',
    },
    {
      subject: validateValue,
      description: 'validateValue',
      expectedType: 'function',
    },
    {
      subject: validateFieldValues,
      description: 'validateFieldValues',
      expectedType: 'function',
    },
  ];

  expectedExports.forEach(function (exported) {
    describe(exported.description, function () {
      it('should be defined', function () {
        expect(exported.subject).toBeDefined();
      });
      it('should be a function', function () {
        expect(typeof exported.subject).toEqual(exported.expectedType);
      });
    });
  });

  describe('default/validate', function () {
    it('should be the validateFieldValues', function () {
      expect(validate).toBe(validateFieldValues);
    });
  });
});
