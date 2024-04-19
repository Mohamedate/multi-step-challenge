export class Validation {
  static checkName(str) {
    if (str === "") return "please fill your name";
    else if (/^\s*[a-zA-z]{3,}\s*([a-zA-z]{3,})?$/.test(str) === false)
      return "invalid username";
    else return "";
  }

  static checkEmail(str) {
    if (str === "") return "please fill the email";
    else if (/^\s*[a-zA-z]+\d*@[a-zA-z]+\.[a-zA-z]+$/.test(str) === false)
      return "invalid email";
    else return "";
  }

  static checkPhone(str) {
    if (str === "") return "please fill phone number";
    else if (/^(\+)?\d{6,}$/.test(str) === false) return "invalid number";
    else return "";
  }
}
