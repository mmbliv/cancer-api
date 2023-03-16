const replaceSpace = require("./replaceSpace.js");

function getDataFromEachCancer(data) {
  //   console.log(data);
  const result = {};
  let tempkey;
  data.forEach((d, i) => {
    if (i > 0) {
      for (let j in d) {
        if (j === "State") {
          //   result[j] = {};
          tempkey = d[j];
        } else {
          const key = replaceSpace(j);
          result[tempkey] = {
            ...result[tempkey],
            [key]: { estimated_deaths_2023: d[j] },
          };
        }
      }
    }
  });
  return result;
}

module.exports = getDataFromEachCancer;
