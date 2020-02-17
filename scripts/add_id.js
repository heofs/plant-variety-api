// const data = require("./data.json");

// const varietyData = JSON.parse(data);

// console.log(varietyData.length);

const fs = require("fs");

fs.readFile("data.json", (err, data) => {
  if (err) throw err;
  const varieties = JSON.parse(data);
  // console.log(varieties);

  for (let i = 0; i < varieties.length; i++) {
    varieties[i].id = i;
  }

  const jsonString = JSON.stringify(varieties, null, 2);
  fs.writeFileSync("data-2.json", jsonString);
});

// console.log("This is after the read call");
