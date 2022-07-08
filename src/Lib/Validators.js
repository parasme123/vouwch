import Toast from 'react-native-simple-toast';

const VALIDATE = {
  EMAIL:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ALPHABET_ONLY: /^[a-zA-Z \s]*$/,
  NUMBER: /[0-9]$/,
  MOBILE: /^[0-]9{1,20}$/,
  STREET: /^[a-zA-Z0-9 '-.~!@#$%^&*()_+={}[];':"<>,.\s]*$/,
  PASSWORD: /[d\-_\s]+$/,
};

export const checkAlphabet = (name, min, max, value) => {
  var min = min || 2;
  var max = max || 30;
  if (value) {
    if (!VALIDATE.ALPHABET_ONLY.test(value)) {
      Toast.show(name + ' is Invalid.');
      return false;
    } else if (value.length < min || value.length > max) {
      Toast.show(`${name} must be between ${min} to ${max} Characters.`);
      return false;
    }
    return true;
  } else {
    Toast.show(name + ' is Required.');
    return false;
  }
}

export const checkEmail = (name, value) => {
  if (value) {
    if (!VALIDATE.EMAIL.test(value)) {
      Toast.show(`${name} is Invalid.`);
      return false;
    }
  } else {
    Toast.show(`${name} is Invalid.`);
    return false;
  }
  return true;
}

export const checkNumber = (name, min, max, value) => {
  var min = min || 7;
  var max = max || 15;
  if (value) {
    if (!VALIDATE.NUMBER.test(value)) {
      Toast.show(`${name} is Invalid.`);
      return false;
    } else if (value.length < min || value.length > max) {
      Toast.show(
        `${name} entered must be between ${min} to ${max} Characters.`,
      );
      return false;
    }
    return true;
  } else {
    Toast.show(`${name} is Required.`);
    return false;
  }
}

export const checkPhoneNumberWithFixLength = (name, max, value) => {
  var max = max || 10;
  if (value) {
    if (!VALIDATE.MOBILE.test(value)) {
      Toast.show(`${name} is Invalid.`);
      return false;
    } else if (value.length != max) {
      Toast.show(`${name} should be ${max} digits.`);
      return false;
    }
    return true;
  } else {
    Toast.show(`${name} is Required.`);
    return false;
  }
}

export const checkOptionalPhoneNumberWithFixLength = (name, max, value) => {
  var max = max || 10;
  if (value) {
    if (!VALIDATE.MOBILE.test(value)) {
      Toast.show(`${name} is Invalid.`);
      return false;
    } else if (value.length != max) {
      Toast.show(`${name} should be ${max} digits.`);
      return false;
    }
    return true;
  } else {
    return true;
  }
}

export const checkPhoneNumber = (name, min, max, value) => {
  var min = min || 7;
  var max = max || 15;
  if (value) {
    if (!VALIDATE.MOBILE.test(value)) {
      Toast.show(`${name} is Invalid.`);
      return false;
    } else if (value.length < min || value.length > max) {
      Toast.show(`${name} should be greater than ${min - 1} digits.`);
      return false;
    }
    return true;
  } else {
    Toast.show(`${name} is Required.`);
    return false;
  }
}

export const checkNotNull = (name, min, max, value) => {
  var min = min || 2;
  var max = max || 2000;
  if (value) {
    if (value.length < min || value.length > max) {
      Toast.show(`${name} must be between ${min} to ${max} Characters.`);
      return false;
    }
    return true;
  } else {
    Toast.show(`${name} is Required.`);
    return false;
  }
}
export const checkNull = (name, min, value) => {
  if (value) {
    if (value?.length < min) {
    Toast.show(`${name} must be at least ${min} characters.`);
    return false;
  } else {
    return true;
  }
 } else {
  Toast.show(`${name} is Required.`);
  return false;
}
  
}

export const checkOtp = (name, min, max, value) => {
  var min = min || 4;
  var max = max || 10;
  if (value) {
    if (value.length < min || value.length > max) {
      Toast.show(`${name} must be between ${min} to ${max} Characters.`);
      return false;
    }
    return true;
  } else {
    Toast.show(`${name} is Required.`);
    return false;
  }
}

export const checkRequire = (name, value) => {
  if (value) {
    return true;
  } else {
    Toast.show(`Please enter ${name}`);
    return false;
  }
}

export const checkRequireSelect = (name, value) => {
  if (value) {
    return true;
  } else {
    Toast.show(`Please select ${name}`);
    return false;
  }
}

export const checkPassword = (name, min, max, value) => {
  var min = min || 7;
  var max = max || 15;
  if (value) {
    if (VALIDATE.PASSWORD.test(value)) {
      Toast.show(`${name} is Invalid.`);
      return false;
    } else if (value.length < min || value.length > max) {
      Toast.show(
        `${name} entered must be between ${min} to ${max} Characters.`,
      );
      return false;
    }
    return true;
  } else {
    Toast.show(`${name} is Required.`);
    return false;
  }
}

export const checkMatch = (name, value, name2, value2) => {
  // var min = min || 5;
  // var max = max || 40;
  if (value == value2) {
    return true;
  } else {
    Toast.show(`${name} and ${name2} should be same.`);
    return false;
  }
}

export const checkStreet = (name, min, max, value) => {
  var min = min || 7;
  var max = max || 15;
  if (value) {
    if (VALIDATE.STREET.test(value)) {
      Toast.show(`${name} is Invalid.`);
      return false;
    } else if (value.length < min || value.length > max) {
      Toast.show(
        `${name} entered must be between ${min} to ${max} Characters.`,
      );
      return false;
    }
    return true;
  } else {
    Toast.show(`${name} is Required.`);
    return false;
  }
}
