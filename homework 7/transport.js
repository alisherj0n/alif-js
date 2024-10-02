class Transport {
  move() {
    console.log(`${this} moves`);
  }
}

class Car extends Transport {
  move() {
    console.log(`Car moves on road`);
  }
}

class Bicycle extends Transport {
  move() {
    console.log(`Bicycle moves on side road`);
  }
}

const startTransport = transport => transport.move();

const myCar = new Car();
const myBicycle = new Bicycle();

// Вызываем метод move() для каждого транспортного средства
startTransport(myCar); // Ожидаемый вывод: Машина едет по дороге
startTransport(myBicycle); // Ожидаемый вывод: Велосипед едет по тротуару
