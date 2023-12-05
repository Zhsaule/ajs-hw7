import Validator from "../validator";

test.each([
  ['user123', true],
  ['user_123', true], 
  ['user-123', true], 
  ['user1234', false],
  ['123user', false],
  ['user-', false],
  ['user@123', false] 
])(
  ('Проверка не корректное username: %s'), (username, status) => {
  const result = Validator.validateUsername(username);
  expect(result).toBe(status); 
});