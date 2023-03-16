const excelToJson = require("convert-excel-to-json");
const fs = require("fs");

function convertData(rowToSkip, sheet, path, columnToKey = false) {
  let ctk = null;
  if (columnToKey) {
    ctk = { "*": "{{columnHeader}}" };
  }
  const result = excelToJson({
    source: fs.readFileSync(path),
    header: {
      rows: rowToSkip,
    },
    sheets: [sheet],
    columnToKey: ctk,
  });
  return result;
}

module.exports = convertData;
