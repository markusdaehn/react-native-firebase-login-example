import { validateFieldValues, fieldRules } from '../../../lib/validate';

const { email, password } = fieldRules;
const validate = validateFieldValues([ email, password ]);
export default validate;
