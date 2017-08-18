import * as rules from './rules';
import * as fields from './fieldRules';

const validate = (fieldRules) => values => {
  const error = {
    _errors: []
  };

  fieldRules
    .forEach(function ({fieldType, rules}) {
         error[fieldType] = rules.map((rule) => rule(values[fieldType]))
                                 .filter((e) => typeof e === 'string');
         error._errors.push(error[fieldType]);
     });

   return error;
}

export {rules, fields};
export default validate;
