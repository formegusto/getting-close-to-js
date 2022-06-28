const Node = function (name) {
  this.children = [];
  this.name = name;
};
Node.prototype = {
  add: function (child) {
    this.children.push(child);
  },
  remove: function (child) {
    const length = this.children.length;
    for (let i = 0; i < length; i++) {
      if (this.children[i] === child) {
        this.children.splice(i, 1);
        return;
      }
    }
  },
  getChild: function (i) {
    return this.children[i];
  },
  hasChildren: function () {
    return this.children.length > 0;
  },
};

function traverse(indent, node) {
  console.log(Array(indent++).join("--") + node.name);

  for (let i = 0, length = node.children.length; i < length; i++)
    traverse(indent, node.getChild(i));
}

function run() {
  const tree = new Node("root");
  const left = new Node("left");
  const right = new Node("right");

  const leftleft = new Node("leftleft");
  const leftright = new Node("leftright");

  const rightleft = new Node("rightleft");
  const rightright = new Node("rightright");

  tree.add(left);
  tree.add(right);
  tree.remove(right);
  tree.add(right);

  left.add(leftleft);
  left.add(leftright);

  right.add(rightleft);
  right.add(rightright);

  traverse(1, tree);
}

run();
