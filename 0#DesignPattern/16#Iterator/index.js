const Iterator = function (items) {
  this.index = 0;
  this.items = items;
};

Iterator.prototype = {
  first: function () {
    this.reset();
    return this.next();
  },

  next: function () {
    return this.items[this.index++];
  },
  hasNext: function () {
    return this.index <= this.items.length;
  },
  reset: function () {
    this.index = 0;
  },
  each: function (callback) {
    for (let item = this.first(); this.hasNext(); item = this.next())
      callback(item);
  },
};

function run() {
  const items = ["one", 2, "circle", true, "Applepie"];
  const iter = new Iterator(items);

  for (let item = iter.first(); iter.hasNext(); item = iter.next())
    console.log(item);
  console.log("");

  iter.each(function (item) {
    console.log(item);
  });
}

run();
