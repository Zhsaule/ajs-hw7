// TODO: write your code here
import Validator from './validator';
import cleanPhoneNumber from './cleannumber';

console.log('worked');

//HW7 Задача с никнеймами
console.log(Validator.validateUsername("user123")); // true
console.log(Validator.validateUsername("user_123")); // true
console.log(Validator.validateUsername("user-123")); // true
console.log(Validator.validateUsername("user1234")); // false (более трех цифр подряд)
console.log(Validator.validateUsername("123user")); // false (начинается с цифры)
console.log(Validator.validateUsername("user-")); // false (заканчивается символом)
console.log(Validator.validateUsername("user#123")); // false (недопустимый символ #)

//HW7 Задача с телефонами
console.log(cleanPhoneNumber('8 (927) 000-00-00')); // +79270000000
console.log(cleanPhoneNumber('+7 960 000 00 00')); // +79600000000
console.log(cleanPhoneNumber('+86 000 000 0000')); // +860000000000