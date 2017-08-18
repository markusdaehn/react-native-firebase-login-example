import createValidate, {fields} from '../../lib/validate';

const {email, password} = fields;
const validate = createValidate([email, password]);
export default validate;
