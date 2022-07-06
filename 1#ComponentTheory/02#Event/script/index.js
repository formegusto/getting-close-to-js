import Items from "./components/Items";

class App {
  constructor() {
    const $app = document.getElementById("app");
    new Items($app);
  }
}

new App();
