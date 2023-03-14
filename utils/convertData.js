const excelToJson = require("convert-excel-to-json");
const fs = require("fs");
const path = require("path");
const path1 = path.join(__dirname, "..", "data", "NewCaseEstimates.xlsx");

function convertData(rowToSkip, sheet) {
  const result = excelToJson({
    source: fs.readFileSync(path1),
    header: {
      rows: rowToSkip,
    },
    sheets: sheet,
  });
  return result;
}

module.exports = convertData;
