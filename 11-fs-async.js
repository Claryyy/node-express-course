const { readFile, writeFile } = require("fs");

//async so need callback
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  // if we don't provide the utf coding you get a buffer

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
    // if we don't provide the utf coding you get a buffer

    const second = result;
    writeFile(
      "./content/result-sync.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});

console.log("done with this task");
console.log("starting the next one");
