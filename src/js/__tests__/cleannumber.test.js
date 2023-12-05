import cleanPhoneNumber from "../cleannumber";

test.each([
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+86 000 000 0000', '+860000000000']
  ])(
    ('Проверка на очистку телефона: %s'), (phonenumber, expected) => {
    const result = cleanPhoneNumber(phonenumber);
    expect(result).toBe(expected); 
  });