function transformArrayToString(arr) {
  //   if (arr.length === 0) {
  //     return '';
  //   }
  //   const product = arr.map(product => {
  //     return `${product.name} (цена: $${product.price.toFixed(2)}, количество: ${
  //       product.quantity
  //     })`;
  //   });

  return arr
    .map(
      product =>
        `${product.name} (Price ${product.price}, Quantity: ${product.quantity})`
    )
    .join(' ');
}

const products = [
  { name: 'Laptop', price: 999.99, quantity: 3 },
  { name: 'Phone', price: 499.99, quantity: 10 },
  { name: 'Tablet', price: 299.99, quantity: 5 },
];

console.log(transformArrayToString(products));

// В целом мне нужен разбор каждой строки кода со стороны учителя для более углубленного понимания.

/// I've used a chatGPT to generate this code giving it a description what I want.  I still need a teacher to explain me a code line by line if possible.

function tokenize(code) {
  const tokenPatterns = [
    { type: 'NUMBER', pattern: /\d+(\.\d*)?/ },
    { type: 'IDENTIFIER', pattern: /[a-zA-Z_$][a-zA-Z_$0-9]*/ },
    { type: 'OPERATOR', pattern: /[+\-*/=<>!&|]+/ },
    { type: 'PUNCTUATION', pattern: /[{}();,]/ },
    { type: 'WHITESPACE', pattern: /\s+/ },
  ];

  function getTokenType(value) {
    for (const pattern of tokenPatterns) {
      if (pattern.pattern.test(value)) {
        return pattern.type;
      }
    }
    return 'UNKNOWN';
  }

  let tokens = [];

  let index = 0;

  while (index < code.length) {
    let matched = false;

    for (const pattern of tokenPatterns) {
      const regex = new RegExp('^' + pattern.pattern.source);
      const result = regex.exec(code.slice(index));

      if (result) {
        const value = result[0];
        if (pattern.type !== 'WHITESPACE') {
          // Ignore whitespace tokens
          tokens.push({ type: pattern.type, value });
        }
        index += value.length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      index++;
    }
  }

  return tokens;
}

const code = `
    function add(a, b) {
        return a + b;
    }
`;
console.log(tokenize(code));

const tokenizer1 = code => {
  const keyword = ['function', 'add', 'return'];
  const identifier = ['add', 'a', 'b'];
  const punctuator = ['+', ';', '{', '}', '(', ')'];
  const words = code.split(/([(){};, +])/);
  console.log(words);
};

tokenizer1(code);

// regex
