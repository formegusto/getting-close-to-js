const Employee = function (name, salary, vacation) {
  const self = this;

  this.accept = function (visitor) {
    visitor.visit(self);
  };

  this.getName = function () {
    return name;
  };
  this.getSalary = function () {
    return salary;
  };
  this.setSalary = function (sal) {
    salary = sal;
  };
  this.getVacation = function () {
    return vacation;
  };
  this.setVacation = function (vac) {
    vacation = vac;
  };
};

const ExtraSalary = function () {
  this.visit = function (emp) {
    emp.setSalary(emp.getSalary() * 1.1);
  };
};
const ExtraVacation = function () {
  this.visit = function (emp) {
    emp.setVacation(emp.getVacation() + 2);
  };
};

function run() {
  const employees = [
    new Employee("John", 10000, 10),
    new Employee("Mary", 20000, 21),
    new Employee("Boss", 250000, 51),
  ];
  const visitorSalaray = new ExtraSalary();
  const visitorVacation = new ExtraVacation();

  for (let emp of employees) {
    emp.accept(visitorSalaray);
    emp.accept(visitorVacation);

    console.log(
      emp.getName() +
        ": $" +
        emp.getSalary() +
        " and " +
        emp.getVacation() +
        " vacation days"
    );
  }
}
run();
