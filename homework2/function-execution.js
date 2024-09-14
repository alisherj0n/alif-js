function userSettings() {
  var theme = 'black';
  let lang = 'en';
  const maxNotificationNum = 21;

  function updateUserSettings(newTheme, newLang, notificationNum) {
    if (newTheme) theme = newTheme;
    if (newLang) lang = newLang;

    function dspUserSettings() {
      console.log(`User theme: ${theme}`);
      console.log(`User Lang: ${lang}`);
      console.log(
        `Notification Number: ${
          notificationNum > maxNotificationNum
            ? 'Notifications exceeds the limit! '
            : maxNotificationNum > notificationNum
            ? notificationNum
            : maxNotificationNum
        }`
      );
    }

    dspUserSettings();
  }

  updateUserSettings('white', 'tj', 22);
}

userSettings();

/* При создании функции создается Function Environment. 
К переменной объявленной с помощью var можно получить доступ за рамки его объявления.  
Переменный let и const имеет доступ только в рамках своего блока
Внутренние функции могут получить доступ к родительским переменным, а родитель не имеет доступ к переменным объявленным внутри потомка.
*/
