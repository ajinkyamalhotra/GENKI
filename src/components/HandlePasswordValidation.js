let passwordValidator = require('password-validator');

function handlePasswordValidation(e, data){
  // Password validation schema. 8-24 characters, lowercase and uppercase,
  // includes numbers, includes symbols, no spaces
  let schema = new passwordValidator();
  schema
  .is().min(8)
  .is().max(24)
  .has().uppercase()
  .has().lowercase()
  .has().digits()
  .has().symbols()
  .has().not().spaces();

  const isValid = schema.validate(data.value);
  let validList = schema.validate(data.value, {list: true});
  let errors = validList.reduce((acc, data)=>({
    ...acc,
    [data]: true
  }),{});
  errors.valid = isValid;
  if (!errors.min) {errors.min=false};
  if (!errors.max) {errors.max=false};
  if (!errors.uppercase) {errors.uppercase=false};
  if (!errors.lowercase) {errors.lowercase=false};
  if (!errors.digits) {errors.digits=false};
  if (!errors.symbols) {errors.symbols=false};
  if (!errors.spaces) {errors.spaces=false};
  return(errors);
}

export default handlePasswordValidation;
