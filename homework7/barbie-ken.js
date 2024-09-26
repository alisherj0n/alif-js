class Doll {
  #name;
  #age;
  #outfit;

  constructor(name, age, outfit) {
    this.#name = name;
    this.#age = age;
    this.#outfit = outfit;
  }

  getInfo() {
    return `Name: ${this.#name}, Age: ${this.#age}, Outfit: ${this.#outfit}`;
  }

  changeOutfit(newOutfit) {
    return (this.#outfit = newOutfit);
  }
}

const barbie = new Doll('Барби', 25, 'розовое платье');
const ken = new Doll('Кен', 26, 'костюм');

console.log(barbie.getInfo());
console.log(ken.getInfo());

barbie.changeOutfit('синее платье');
console.log(barbie.getInfo());
