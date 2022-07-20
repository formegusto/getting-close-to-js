import Component from "../core/Component";

export default class Items extends Component {
  template() {
    const { filteredItems } = this.$props;
    return `
            <ul>
                ${filteredItems
                  .map(
                    (item, key) => `
                        <li data-seq="${item.seq}">
                          ${item.contents} 
                          <button class="toggleBtn" style="color: ${
                            item.active ? "#09F" : "#F09"
                          }">
                            ${item.active ? "활성" : "비활성"}
                          </button>
                          <button class="deleteBtn" data-index="${key}">삭제</button>
                        </li>
                `
                  )
                  .join("")}
            </ul>
        `;
  }

  setEvent() {
    const { toggleItem, deleteItem } = this.$props;
    this.addEvent("click", ".toggleBtn", ({ target }) => {
      toggleItem(parseInt(target.closest("[data-seq]").dataset.seq));
    });
    this.addEvent("click", ".deleteBtn", ({ target }) => {
      deleteItem(parseInt(target.closest("[data-seq]").dataset.seq));
    });
    // this.addEvent("click", ".deleteBtn", ({ target }) => {
    //   const items = [...this.$state.items];
    //   items.splice(target.dataset.index, 1);
    //   this.setState({ items });
    // });
    // this.addEvent("click", ".filterBtn", ({ target }) => {
    //   this.setState({
    //     ...this.$state,
    //     isFilter: parseInt(target.dataset.isFilter),
    //   });
    // });
    // this.addEvent("click", ".toggleBtn", ({ target }) => {
    //   const itemSeq = parseInt(target.closest("[data-seq]").dataset.seq);

    //   this.setState({
    //     ...this.$state,
    //     items: this.$state.items.map((item) =>
    //       item.seq === itemSeq ? { ...item, active: !item.active } : item
    //     ),
    //   });
    // });
    // // Bubbling
    // // this.$target.addEventListener("click", ({ target }) => {
    // //   const items = [...this.$state.items];

    // //   if (target.classList.contains("appendBtn"))
    // //     items.push(`item${items.length + 1}`);

    // //   if (target.classList.contains("deleteBtn"))
    // //     items.splice(target.dataset.index, 1);

    // //   this.setState({ items: [...items] });
    // // });

    // // Original
    // // this.$target.querySelector(".appendBtn").addEventListener("click", () => {
    // //   const { items } = this.$state;
    // //   this.setState({ items: [...items, `item${items.length + 1}`] });
    // // });

    // // this.$target.querySelectorAll(".deleteBtn").forEach((deleteBtn) => {
    // //   deleteBtn.addEventListener("click", ({ target }) => {
    // //     const items = [...this.$state.items];
    // //     items.splice(target.dataset.index, 1);
    // //     this.setState({ items });
    // //   });
    // // });
  }
}
