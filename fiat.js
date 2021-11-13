let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Blue",
  passengers: 2,
  mileage: 88000,
  started: false,
  fuel: 0,
  amount: 4,
  consum: 2,
  start: function () {
    this.started = true;
  },
  stop: function () {
    if (this.fuel <= 0) {
      alert("Сначала заправте автомобиль!");
    } else {
      this.started = false;
    }
  },
  drive: function () {
    if (this.started) {
      alert("Бип!");
      this.fuel -= this.consum;
      alert("У меня в баке " + this.fuel + " литров бензина!");
    } else {
      alert("Сначала запустите двигатель!");
    }
  },
  addFuel: function (amount) {
    this.fuel += this.amount;
    alert("У меня в баке " + this.fuel + " литров бензина!");
  },
  showFuel: function () {
    alert("У меня в баке " + this.fuel + " литров бензина!");
  },
  toString: function () {
    return "Автомобиль " + this.make + this.year;
  },
};

alert(fiat.make);
fiat.addFuel();
fiat.start();
fiat.drive();
fiat.drive();
fiat.stop();
fiat.addFuel();
fiat.showFuel();

alert(fiat);

// } else if (this.fuel <= 0) {
//   alert("Сначала заправте автомобиль!");
//   fiat.addFuel();
