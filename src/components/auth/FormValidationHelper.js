//TRUE: Is Valid
//FALSE: Is not Valid

const passwordValidation = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,30})$/;
const inputValidation = /^[a-zA-Z]+$/;
const handleValidation = /^[a-zA-Z0-9]+$/;
const emailValidation = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
//const emailValidation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
function generalValidation(input) {
  return inputValidation.test(input);
}

function validatePassword(input) {
  return passwordValidation.test(input);
}

function validatePasswordConfirm(input, input2) {
  return input === input2;
}

function validateHandle(input) {
  return handleValidation.test(input);
}

function validateEmail(input) {
  return emailValidation.test(input);
}

export {
  generalValidation,
  validatePassword,
  validateEmail,
  validatePasswordConfirm,
  validateHandle,
};
