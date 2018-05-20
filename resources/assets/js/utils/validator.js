import Vue from "vue";

class Validation {
  static text(value) {
    const regex = /^[a-z0-9 ,.'\-!#$%&*+/=?^_`{}()]+$/i;
    return regex.test(value);
  }

  static date(value) {
    return (
      Object.prototype.toString.call(value) === "[object Date]" &&
      !isNaN(value.getTime())
    );
  }

  static name(value) {
    const regex = /^[a-z ,.'-]+$/i;
    return regex.test(value);
  }

  static username(value) {
    const regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
    return regex.test(value);
  }

  static email(value) {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
    return regex.test(value);
  }

  static password(value) {
    const regex = /^(?=.*[A-Za-z])[A-Za-z\d!_\-?@$*^]{6,}/;
    return regex.test(value);
  }

  static registerPassword(value) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!_\-?@$*^]{8,}/;
    return regex.test(value);
  }
}

export default Validation;
