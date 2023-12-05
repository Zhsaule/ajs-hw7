export default function cleanPhoneNumber(phoneNumber) {
  // Удаляем все символы, кроме цифр
  const cleanedNumber = phoneNumber.replace(/\D/g, '');
  
  // Проверяем, является ли номер российским
  if (cleanedNumber.length === 11 && cleanedNumber.startsWith('8')) {
    // Заменяем префикс 8 на +7
    return '+7' + cleanedNumber.slice(1);
  } 

  // Возвращаем очищенный номер
  return '+' + cleanedNumber;
}