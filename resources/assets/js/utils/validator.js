import Vue from 'vue'

class Validation {
  static username(value) {
    const regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/
    return regex.test(value)
  }

  static password(value) {
    const regex = /^(?=.*[A-Za-z])[A-Za-z\d!_\-?@$*^]{6,}/
    return regex.test(value)
  }

  static registerPassword(value) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!_\-?@$*^]{8,}/
    return regex.test(value)
  }
}

export default Validation