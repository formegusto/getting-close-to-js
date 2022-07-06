import Component from "../core/Component";

export default class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }

  template() {
    const { items } = this.$state;
    return `
            <ul>
                ${items
                  .map(
                    (
                      item,
                      key
                    ) => `<li>${item} <button class="deleteBtn" data-index="${key}">삭제</button></li>
                `
                  )
                  .join("")}
                
            </ul>
            <button class="appendBtn">추가</button>
        `;
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

  setEvent() {
    this.addEvent("click", ".appendBtn", () => {
      const items = [...this.$state.items];
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
    this.addEvent("click", ".deleteBtn", ({ target }) => {
      const items = [...this.$state.items];
      items.splice(target.dataset.index, 1);
      this.setState({ items });
    });
    // Bubbling
    // this.$target.addEventListener("click", ({ target }) => {
    //   const items = [...this.$state.items];

    //   if (target.classList.contains("appendBtn"))
    //     items.push(`item${items.length + 1}`);

    //   if (target.classList.contains("deleteBtn"))
    //     items.splice(target.dataset.index, 1);

    //   this.setState({ items: [...items] });
    // });

    // Original
    // this.$target.querySelector(".appendBtn").addEventListener("click", () => {
    //   const { items } = this.$state;
    //   this.setState({ items: [...items, `item${items.length + 1}`] });
    // });

    // this.$target.querySelectorAll(".deleteBtn").forEach((deleteBtn) => {
    //   deleteBtn.addEventListener("click", ({ target }) => {
    //     const items = [...this.$state.items];
    //     items.splice(target.dataset.index, 1);
    //     this.setState({ items });
    //   });
    // });
  }
}
