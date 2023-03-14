function replaceSpace(string) {
  const newString = string.replace(/\W/gi, "_");
  return newString;
}
// console.log(replaceSpace("a b?b"));
module.exports = replaceSpace;
