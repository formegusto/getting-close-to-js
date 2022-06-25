const Singletone = (function () {
  let instance;

  function createInstance() {
    const object = new Object("i am object");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) instance = createInstance();

      return instance;
    },
  };
})();

function run() {
  const instance1 = Singletone.getInstance();
  const instance2 = Singletone.getInstance();

  console.log("Same Instance? " + (instance1 === instance2)); // Same Instance? true
}
run();
