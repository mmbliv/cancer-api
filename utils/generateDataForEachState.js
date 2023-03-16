const replaceSpace = require("./replaceSpace.js");

function getDataFromEachCancer(data, keyString) {
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
          let value;
          if (Number.isFinite(+d[j])) {
            value = +d[j];
          } else {
            value = d[j];
          }
          result[tempkey] = {
            ...result[tempkey],
            [key]: { [keyString]: value },
          };
        }
      }
    }
  });
  return result;
}

module.exports = getDataFromEachCancer;
