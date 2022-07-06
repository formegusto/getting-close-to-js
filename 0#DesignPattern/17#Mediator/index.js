const Chatroom = function () {
  const participants = {};

  return {
    register: function (participant) {
      participants[participant.name] = participant;
      participant.chatroom = this;
    },
    send: function (msg, from, to) {
      if (to) to.receive(msg, from);
      else {
        for (key in participants)
          if (participants[key] !== from) participants[key].receive(msg, from);
      }
    },
  };
};

const Participant = function (name) {
  this.name = name;
  this.chatroom = null;
};
Participant.prototype = {
  send: function (msg, to) {
    this.chatroom.send(msg, this, to);
  },
  receive: function (msg, from) {
    console.log(from.name + " to " + this.name + ": " + msg);
  },
};

function run() {
  const yoko = new Participant("Yoko");
  const john = new Participant("John");
  const paul = new Participant("Paul");
  const ringo = new Participant("Ringo");

  const chatroom = new Chatroom();
  chatroom.register(yoko);
  chatroom.register(john);
  chatroom.register(paul);
  chatroom.register(ringo);

  yoko.send("All u need is love.");
  yoko.send("I love u John :)");
  john.send("Hey, no need to broadcast", yoko);
  paul.send("Ha, I heard that!");
  ringo.send("Paul, what do u think?", paul);
}
run();
