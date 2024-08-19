// const fs = require("fs");

// fs.writeFile(
//   "sample.txt",
//   "Hello World. Welcome to Node.js File System module.",
//   (err) => {
//     if (err) throw err;
//     console.log("File created!");
//   }
// );
// fs.readFile("sample.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });
const args = require("minimist")(process.argv.slice(2), {
  alias: {
    n: "name",
    a: "age",
  },
  default: {
    greeting: "Hello",
  },
});

console.log(args);
