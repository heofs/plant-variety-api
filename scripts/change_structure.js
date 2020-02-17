const fs = require("fs");
const data = require("./data-4.json");

const newList = [];
let x = data.length;

while (x--) {
  const el = data[x];

  newList[x] = {
    id: el.id,
    variety: el.variety,
    yield: {
      indoor: el["yield (indoor)"],
      outdoor: el["yield (outdoor)"]
    },
    height: {
      indoor: el["height (indoor)"],
      outdoor: el["height (outdoor)"]
    },
    harvest_time: {
      outdoor: el["harvest time (outdoor)"]
    },
    flowering_time: el["flowering time"],
    flowering_type: el["flowering type"],
    smell_and_flavour: el["smell & flavour"],
    content: {
      thc: el.thc,
      cbd: el.cbd
    },
    parents: el.parents,
    genetics: el.genetics
  };
}

const jsonString = JSON.stringify(newList, null, 2);
fs.writeFileSync("data-5.json", jsonString);
