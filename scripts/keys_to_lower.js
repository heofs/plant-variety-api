const fs = require("fs");
const data = require("./data-2.json");

const newList = [];
let x = data.length;

while (x--) {
  const obj = data[x];

  var key,
    keys = Object.keys(obj);

  var n = keys.length;
  var newObj = {};

  while (n--) {
    key = keys[n];
    newObj[key.toLowerCase()] = data[x][key];
  }
  newList[x] = newObj;
}

const jsonString = JSON.stringify(newList, null, 2);
fs.writeFileSync("data-4.json", jsonString);
