function Shipping() {
  this.request = function (zipStart, zipEnd, weight) {
    return "$49.75";
  };
}

function AdvancedShipping() {
  this.login = function (credentials) {
    console.log("[login]", credentials);
  };
  this.setStart = function (start) {
    console.log("[set start]", start);
  };
  this.setDestination = function (destination) {
    console.log("[destination]", destination);
  };
  this.calculate = function (weight) {
    return "$39.50";
  };
}

function ShippingAdapter(credentials) {
  const shipping = new AdvancedShipping();

  shipping.login(credentials);

  return {
    request: function (zipStart, zipEnd, weight) {
      shipping.setStart(zipStart);
      shipping.setDestination(zipEnd);
      return shipping.calculate(weight);
    },
  };
}

function run() {
  const shipping = new Shipping();
  const credentials = { token: "30a8-6ee1" };
  const adapter = new ShippingAdapter(credentials);

  let cost = shipping.request("78701", "10010", "2 lbs");
  console.log("Old cost: " + cost);

  cost = adapter.request("78701", "10010", "2 lbs");
  console.log("New cost: " + cost);
}
run();
