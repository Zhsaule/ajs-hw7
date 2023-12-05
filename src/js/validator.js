export default class Validator {
  static validateUsername(username) {
    const regex = /^[a-zA-Z0-9_-]+$/;
    const regexConsecutiveDigits = /\d{4,}/;
    const regexStartEnd = /^[0-9_-]|[_-]$/;

    return regex.test(username) && !regexConsecutiveDigits.test(username) && !regexStartEnd.test(username)
  }
}
  