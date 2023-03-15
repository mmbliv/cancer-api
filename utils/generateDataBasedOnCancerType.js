const replaceSpace = require("./replaceSpace.js");

function generateDataBasedOnCancerType(data) {
  const result = data.map((d) => {
    const singleData = { both_sex: d.B, female: d.C, male: d.D };
    const key = replaceSpace(d.A);
    return { [key]: singleData };
  });
  return result;
}
module.exports = generateDataBasedOnCancerType;
