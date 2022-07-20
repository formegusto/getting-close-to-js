export default class Component {
  $target;
  $props;
  $state;
  constructor($target, $props) {
    console.log($target);
    this.$target = $target;
    this.$props = $props;

    this.setup();
    this.render();
    this.setEvent();
  }
  setup() {}
  mounted() {}
  template() {}
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
  addEvent(event, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(event, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
