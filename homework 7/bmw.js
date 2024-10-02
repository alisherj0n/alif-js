class BMW {
  constructor(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.mileage = 0;
  }

  paint(newColor) {
    return (this.color = newColor);
  }

  drive(distance) {
    this.mileage = distance;
    console.log(
      `The ${this.model} has made ${this.mileage} km. Total Mileage: ${this.mileage} km.`
    );
  }

  startEngine() {
    console.log(`The engine of ${this.model} has been started`);
  }

  displayInfo() {
    console.log(
      `Модель: ${this.model}\nЦвeт: ${this.color}\nГод выпуска: ${this.year}\nПробег: ${this.mileage} km`
    );
  }
}

const myBMW = new BMW('X5', 'Черный', 2020);

myBMW.displayInfo();

myBMW.startEngine();

myBMW.paint('Синий');

myBMW.drive(120);

myBMW.displayInfo();

// myBMW.drive(120);
// // Ожидаемый вывод: Автомобиль проехал 120 км. Общий пробег: 120 км.
