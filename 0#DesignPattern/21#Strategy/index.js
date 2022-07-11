const Shipping = function () {
  this.company = "";
};
Shipping.prototype = {
  setStrategy: function (company) {
    this.company = company;
  },
  calculate: function (package) {
    return this.company.calculate(package);
  },
};

const UPS = function () {
  this.calculate = function (package) {
    return "$45.95";
  };
};
const USPS = function () {
  this.calculate = function (package) {
    return "$39.40";
  };
};
const Fedex = function () {
  this.calculate = function (package) {
    return "$43.20";
  };
};

function run() {
  const package = { from: "76712", to: "10012", weight: "1kg" };

  const ups = new UPS();
  const usps = new USPS();
  const fedex = new Fedex();

  const shipping = new Shipping();
  shipping.setStrategy(ups);
  console.log("UPS Strategy :", shipping.calculate(package));
  shipping.setStrategy(usps);
  console.log("USPS Strategy :", shipping.calculate(package));
  shipping.setStrategy(fedex);
  console.log("Fedex Strategry :", shipping.calculate(package));
}
run();
