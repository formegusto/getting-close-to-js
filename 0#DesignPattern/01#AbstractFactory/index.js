function Employee(name) {
  this.name = name;

  this.say = function () {
    console.log("I am employee", name);
  };
}
function Vendor(name) {
  this.name = name;

  this.say = function () {
    console.log("I am vender", name);
  };
}

function EmployeeFactory() {
  this.create = function (name) {
    return new Employee(name);
  };
}
function VendorFactory() {
  this.create = function (name) {
    return new Vendor(name);
  };
}

function run() {
  var persons = [];
  var employeeFactory = new EmployeeFactory();
  var vendorFactory = new VendorFactory();

  persons.push(employeeFactory.create("forme"));
  persons.push(vendorFactory.create("gusto"));

  persons.forEach((person) => {
    person.say();
  });
}

run();
