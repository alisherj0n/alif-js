### Задача: Система авторизации пользователей с использованием Map

**Описание**:  
Вы разрабатываете систему авторизации для веб-приложения. Ваша задача — создать систему, которая управляет пользователями и их учетными данными (логинами и паролями) с использованием типа `Map`. Система должна обеспечивать возможность регистрации новых пользователей, а также проверку существующих учетных записей.

1. **Создайте класс `AuthSystem`**:

   - **Свойства**:
     - `users` — экземпляр `Map`, где ключом будет логин пользователя, а значением — объект с паролем и дополнительной информацией (например, `name`, `email`).
   - **Методы**:
     - `register(username, password, name, email)` — регистрирует нового пользователя, добавляя его в `Map`.
     - `login(username, password)` — проверяет, существует ли пользователь с таким логином и правильным паролем. Если да, возвращает сообщение об успешной авторизации, иначе — сообщение об ошибке.
     - `getUserInfo(username)` — возвращает информацию о пользователе (имя и email) по логину.

2. **Пример использования класса `AuthSystem`**:
   - Создайте экземпляр класса `AuthSystem`.
   - Зарегистрируйте нескольких пользователей.
   - Попробуйте авторизоваться с правильными и неправильными учетными данными.
   - Выведите информацию о пользователе.

### Входные данные:

- Логин, пароль, имя и email для регистрации.
- Логин и пароль для авторизации.

### Ожидаемый результат:

- Программа должна корректно регистрировать пользователей, проверять учетные данные и выводить информацию о пользователях.

### Пример использования:

```javascript
// Пример использования класса AuthSystem
const authSystem = new AuthSystem();

// Регистрация пользователей
authSystem.register('user1', 'password123', 'Alice', 'alice@example.com');
authSystem.register('user2', 'mypassword', 'Bob)
```
