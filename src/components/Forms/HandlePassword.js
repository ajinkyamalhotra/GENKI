import handlePasswordValidation from './HandlePasswordValidation';
import handleConfirmPassword from './HandleConfirmPassword';

function handlePassword(e, data, password){
  if(data.name === 'password'){
    let passwordValidation = handlePasswordValidation(e, data);
    return passwordValidation;
  }else{
    let passwordMatch = handleConfirmPassword(e, data, password);
    return passwordMatch;
  }
}

export default handlePassword;
