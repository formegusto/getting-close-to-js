const Request = function (amout) {
  this.amount = amout;
  console.log("Requested: $" + amout + "\n");
};

Request.prototype = {
  get: function (bill) {
    const count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log("Dispense " + count + " $" + bill + " bills");
    return this;
  },
};

function run() {
  const request = new Request(378);

  request.get(100).get(50).get(20);
}
run();
