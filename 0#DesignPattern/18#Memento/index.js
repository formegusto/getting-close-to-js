const Person = function (...args) {
  this.name = args[0];
  this.street = args[1];
  this.city = args[2];
  this.state = args[3];
};
Person.prototype = {
  hydrate: function () {
    return JSON.stringify(this);
  },
  dehydrate: function (memento) {
    const m = JSON.parse(memento);
    for (key in m) this[key] = m[key];
  },
};

const CareTaker = function () {
  this.mementos = {};
  this.add = (key, memento) => {
    this.mementos[key] = memento;
  };
  this.get = (key) => this.mementos[key];
};

function run() {
  const mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
  const john = new Person("John Wang", "48th Street", "San Jose", "CA");
  const caretaker = new CareTaker();

  caretaker.add(1, mike.hydrate());
  caretaker.add(2, john.hydrate());

  mike.name = "King Kong";
  john.name = "Superman";
  console.log(mike.name);
  console.log(john.name);

  mike.dehydrate(caretaker.get(1));
  john.dehydrate(caretaker.get(2));

  console.log(mike.name);
  console.log(john.name);
}
run();
