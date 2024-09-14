# Задача: Создание функции для парсинга JavaScript кода

**Описание**:  
Вам нужно создать функцию `parser`, которая принимает строку, содержащую код JavaScript, и преобразует её в массив токенов. Каждый токен — это объект с двумя свойствами:
- `type`: тип токена (например, ключевое слово, идентификатор, пунктуатор).
- `value`: значение токена.

Функция должна поддерживать парсинг базовых элементов JavaScript: ключевые слова, идентификаторы, пунктуаторы, операторы и т.д.

## Цель:  
Реализовать функцию `parser`, которая будет принимать строку с JavaScript кодом и возвращать массив токенов.

### Входные данные:  
Функция принимает строку с кодом JavaScript. Например:
```javascript
function add(a, b) {
    return a + b;
}
```

### Ожидаемый результат:
Функция должна вернуть массив токенов в следующем формате:

```javascript
const tokens = [
    {
        type: "Keyword",
        value: "function"
    },
    {
        type: "Identifier",
        value: "add"
    },
    {
        type: "Punctuator",
        value: "("
    },
    {
        type: "Identifier",
        value: "a"
    },
    {
        type: "Punctuator",
        value: ","
    },
    {
        type: "Identifier",
        value: "b"
    },
    {
        type: "Punctuator",
        value: ")"
    },
    {
        type: "Punctuator",
        value: "{"
    },
    {
        type: "Keyword",
        value: "return"
    },
    {
        type: "Identifier",
        value: "a"
    },
    {
        type: "Punctuator",
        value: "+"
    },
    {
        type: "Identifier",
        value: "b"
    },
    {
        type: "Punctuator",
        value: ";"
    },
    {
        type: "Punctuator",
        value: "}"
    }
];
```

### Ограничения: 
- Токены могут быть одного из типов: "Keyword", "Identifier", "Punctuator", "Operator";
- Ключевые слова включают такие элементы как function, return, и т.д;
- Пунктуаторы — это символы вроде (, ), {, }, ;, +;
- Идентификаторы — это имена функций, переменных (например, add, a, b).

### Пример использования:

```javascript
const code = `
    function add(a, b) {
        return a + b;
    }
`;

const tokens = parser(code);
console.log(tokens);
```