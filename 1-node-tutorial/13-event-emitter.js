// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`);
});

// we can have as many events as we want
customEmitter.on("response", () => {
  console.log("some other logic here");
});

// the order matters, emit should be after on. Otherwise, there will be nothing on the console, you listen, then you emit
customEmitter.emit("response", "john", 34);
