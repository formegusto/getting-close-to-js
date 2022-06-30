const User = function (name) {
  this.name = name;

  this.say = function () {
    console.log("User: " + this.name);
  };
};

const DecoratedUser = function (user, street, city) {
  Object.entries(user).forEach(([key, value]) => {
    this[key] = value;
  });
  this.street = street;
  this.city = city;

  this.say = function () {
    console.log(
      "Decorated User: " + [this.name, this.street, this.city].join(", ")
    );
  };
};

function run() {
  const user = new User("Kelly");
  user.say();

  const decorated = new DecoratedUser(user, "Boradway", "New York");
  decorated.say();
}
run();
