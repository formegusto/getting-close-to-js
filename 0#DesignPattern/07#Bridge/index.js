const Gesture = function (output) {
  this.output = output;

  this.tap = () => {
    this.output.click();
  };
  this.swipe = () => {
    this.output.move();
  };
  this.pan = () => {
    this.output.drag();
  };
  this.pinch = () => {
    this.output.zoom();
  };
};

const Mouse = function (output) {
  this.output = output;

  this.click = () => {
    this.output.click();
  };
  this.move = () => {
    this.output.move();
  };
  this.drag = () => {
    this.output.drag();
  };
  this.wheel = () => {
    this.output.zoom();
  };
};

const Screen = function () {
  this.click = () => {
    console.log("Screen Select");
  };
  this.move = () => {
    console.log("Screen Move");
  };
  this.drag = () => {
    console.log("Screen Drag");
  };
  this.zoom = () => {
    console.log("Screen zoom in");
  };
};

const Audio = function () {
  this.click = () => {
    console.log("Sound oink");
  };
  this.move = () => {
    console.log("Sound waves");
  };
  this.drag = () => {
    console.log("Sound screetch");
  };
  this.zoom = () => {
    console.log("Sound volumne up");
  };
};

function run() {
  const screen = new Screen();
  const audio = new Audio();

  const hand = new Gesture(screen);
  const mouse = new Mouse(audio);

  hand.tap();
  hand.swipe();
  hand.pinch();

  mouse.click();
  mouse.move();
  mouse.wheel();
}

run();
