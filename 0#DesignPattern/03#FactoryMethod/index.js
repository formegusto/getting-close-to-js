var Employee = function () {
  this.say = function () {
    console.log(this.type + ": rate " + this.hourly + "/hour");
  };
};
const employee = new Employee();
var FullTime = function () {
  this.hourly = "$12";
};
var PartTime = function () {
  this.hourly = "$11";
};
var Temporary = function () {
  this.hourly = "$10";
};
var Contractor = function () {
  this.hourly = "$15";
};

var Factory = function () {
  this.createEmployee = function (type) {
    var _employee;

    switch (type) {
      case "fulltime":
        _employee = new FullTime();
        break;
      case "parttime":
        _employee = new PartTime();
        break;
      case "temporary":
        _employee = new Temporary();
        break;
      case "contractor":
        _employee = new Contractor();
        break;
    }
    _employee.type = type;
    Object.setPrototypeOf(_employee, employee);

    return _employee;
  };
};

function run() {
  var employees = [];
  var factory = new Factory();

  employees.push(factory.createEmployee("fulltime"));
  employees.push(factory.createEmployee("parttime"));
  employees.push(factory.createEmployee("temporary"));
  employees.push(factory.createEmployee("contractor"));

  employees.forEach((employee) => {
    employee.say();
  });
}

run();
