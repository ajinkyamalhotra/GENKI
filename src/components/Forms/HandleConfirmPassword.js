function handleConfirmPassword(e, data, password){
  if(password === data.value){
    return true;
  }else{
    return false;
  }
}

export default handleConfirmPassword;
