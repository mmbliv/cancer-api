function replaceSpace(string) {
  const newString = string.split(" ").join("_");
  return newString;
}
module.exports = replaceSpace;
