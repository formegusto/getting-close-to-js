const datastore = {
  process: function () {
    this.connect();
    this.select();
    this.disconnect();

    return true;
  },
};

function inherit(proto) {
  const F = function () {};
  F.prototype = proto;
  return new F();
}

function run() {
  const mySQL = inherit(datastore);

  mySQL.connect = function () {
    console.log("MySQL: connect step.");
  };
  mySQL.select = function () {
    console.log("MySQL: select step.");
  };
  mySQL.disconnect = function () {
    console.log("MySQL: disconnect step.");
  };

  mySQL.process();
}
run();
