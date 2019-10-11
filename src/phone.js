/**
 * @name phone
 * @description phone number input validator
 * @example
 *
 * // valid: accepted phone inputs
 * console.log(phone('(444) 444-4444')) // true
 * console.log(phone('+1 (444) 444-4444')) // true
 * console.log(phone('444-444-4444')) // true
 * console.log(phone('+1 444-444-4444')) // true
 * console.log(phone('444.444.4444')) // true
 * console.log(phone('(444) 444 4444')) // true
 * console.log(phone('4444444444')); // true
 * console.log(phone('444 444 4444')) // true
 * console.log(phone('+14444444444')) // true
 *
 * // invalid: too many numbers or has a letter or non-numeric character
 * console.log(phone('44444444445')) // false
 * console.log(phone('+144444444445')) // false
 * console.log(phone('S444444445')) // false
 * */

// const NANP_REGEXP = /^(\+?1[.\-\s]?)?\(?[2-9]\d{2}[).\-\s]?\s?[2-9]\d{2}[.\-\s]?\d{4}$/;
const NANP_REGEXP = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

function phone(msg) {
  return this.test({
    name: 'phone',
    exclusive: true,
    message: msg || 'must be a valid phone number',
    test(value) {
      if (!value) return true;
      return NANP_REGEXP.test(value);
    },
  });
}

export default phone;
