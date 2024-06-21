const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./context/first.txt", "utf8");
const second = readFileSync("./context/second.txt", "utf8");

console.log(first, second);

writeFileSync("./context/result.txt", "here is the result", { flag: "a" });
console.log("done with the task");
console.log("starting the next one");
