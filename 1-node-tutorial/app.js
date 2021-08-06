const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on - listen for specific event
// emit - emit the event

customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

customEmitter.emit("response", "john", 34);
