const Flyweight = function (make, model, processor) {
  this.make = make;
  this.model = model;
  this.processor = processor;
};

const FlyweightFactory = (function () {
  const flyweights = {};
  let count = 0;

  return {
    get: function (make, model, processor) {
      if (!flyweights[make + model]) {
        flyweights[make + model] = new Flyweight(make, model, processor);
        count++;
      }

      return flyweights[make + model];
    },

    getCount: () => count,
  };
})();

const Computer = function (make, model, processor, memory, tag) {
  this.flyweight = FlyweightFactory.get(make, model, processor);
  this.memory = memory;
  this.tag = tag;
  this.getMake = () => this.flyweight.make;
};

const ComputerCollection = function () {
  const computers = {};
  let count = 0;

  return {
    add: function (make, model, processor, memory, tag) {
      computers[tag] = new Computer(make, model, processor, memory, tag);
      count++;
    },
    get: (tag) => computers[tag],
    getCount: () => count,
  };
};

function run() {
  const computers = new ComputerCollection();

  computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
  computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
  computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
  computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
  computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
  computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
  computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

  console.log("Computers: " + computers.getCount());
  console.log("Flyweights: " + FlyweightFactory.getCount());
}

run();
