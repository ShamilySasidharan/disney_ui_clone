export const LoginValidation = (email, password) => {
    const isEmailValid =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        email
      );
    const isPasswordValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password);
  
    if (!isEmailValid && !isPasswordValid) {
      return "Email and Password are not valid.";
  } else if (!isEmailValid) {
      return "The email is not valid.";
  } else if (!isPasswordValid) {
      return "The password is not valid.";
  } else {
      return null;
  }
  }
  
  
  export const SignupValidation = (email, password, name, phone) => {
    const isEmailValid =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        email
      );
    const isPasswordValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password);
    const isNameValid = /^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/.test(name);
    const isPhoneNumValid = /(0|91)?[6-9][0-9]{9}/.test(phone);
    if (!isEmailValid) {
      return "The email is not valid";
    } else if (!isPasswordValid) {
      return "The password is not valid";
    } else if (!isNameValid) {
      return "The name is not valid";
    } else if (!isPhoneNumValid) {
      return "The phone number is not valid";
    } else if (
      !isEmailValid &&
      !isPasswordValid &&
      !isNameValid &&
      !isPhoneNumValid
    ) {
      return "Email,Password,Name,phone numbers are not  valid.";
    } else {
      return null;
    }
  };