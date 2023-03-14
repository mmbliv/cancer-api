const excelToJson = require("convert-excel-to-json");
const fs = require("fs");

function convertData(rowToSkip, sheet, path) {
  const result = excelToJson({
    source: fs.readFileSync(path),
    header: {
      rows: rowToSkip,
    },
    sheets: sheet,
  });
  return result;
}

module.exports = convertData;
