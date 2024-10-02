class Player {
  #name;
  #position;
  #number;

  constructor(name, position, number) {
    this.#name = name;
    this.#position = position;
    this.#number = number;
  }

  getInfo() {
    return `Player: ${this.#name},\nPosition: ${this.#position},\nNumber: ${
      this.#number
    }`;
  }
}

class RealMadridPlayer extends Player {
  #contractYears;

  constructor(name, position, number, years) {
    super(name, position, number);
    this.#contractYears = years;
  }

  getContractInfo() {
    return `Контракт на ${this.#contractYears} лет с Real Madrid`;
  }
}

const player1 = new RealMadridPlayer('Карим Бензема', 'Нападающий', 9, 3);
const player2 = new RealMadridPlayer('Лука Модрич', 'Полузащитник', 10, 2);

console.log(player1.getContractInfo());

console.log(player2.getInfo());

console.log(player2.getContractInfo());
