var theme = 'black';
let lang = 'en';
const maxNotificationNum = 21;

function displaySettings() {
  console.log(`
        The User Theme is: ${theme},
        The User Language is ${lang},
        The User has: ${maxNotificationNum} Notifications
        `);
}

const updateSettings = function (newTheme, newLang, notificationNum) {
  if (newTheme) theme = newTheme;
  console.log(`'The User Current Theme is: ${theme}'`);

  if (newLang) lang = newLang;
  console.log(`'The User Current Language is: ${lang}'`);
};

displaySettings();
updateSettings('White', 'tj');

// Переменная объявленная с помощью var может может быть доступна вне своего блока и к ней можно получить доступ до присвоения значения.  Носит глобальный характер

// Переменная объявленная с помощью let имеет блочный тип и доступна в рамках своего блока.  Значение переменной можно менять

// Переменная объявленная с помощью const также доступна в рамках своего блока и не имеет доступа из внешней среды. Значение переменной не может меняться

// Все вышеперечисленные переменные могут быть доступны, если они были объявлены в глобальной среде.
