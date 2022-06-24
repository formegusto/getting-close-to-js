function Customer(...args) {
  this.first = args[0];
  this.last = args[1];
  this.status = args[2];

  this.say = () => {
    console.log(
      "name: " + this.first + " " + this.last + ", status: " + this.status
    );
  };
}

function CustomerPrototype(proto) {
  this.proto = proto;

  this.clone = () => {
    var { first, last, status } = this.proto;
    var customer = new Customer(first, last, status);

    return customer;
  };
}

function run() {
  var proto = new Customer("n/a", "n/a", "pending");
  var prototype = new CustomerPrototype(proto);

  var customer = prototype.clone();
  customer.say();
}

run();
