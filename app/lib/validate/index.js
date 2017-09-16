import * as rules from './rules';
import * as fields from './fieldRules';

const validate = (fieldRules) => values => {
  const error = {};

  fieldRules
    .forEach(function ({fieldType, rules}) {
        const fieldErrors = rules.map((rule) => rule(values[fieldType]))
                                 .filter((e) => typeof e === 'string');
        if(fieldErrors.length > 0) {
           error[fieldType] = fieldErrors[0];
           error._errors = (error._errors || []).concat(fieldErrors);
        }
     });

   return Object.freeze(error);
}

export {rules, fields};
export default validate;
