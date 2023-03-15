class Cancer {
  constructor(dataType, key) {
    this.data = {};
    this.dataType = dataType;
    this.key = key;
  }
  generateData() {
    this.dataType.forEach((d) => {
      // console.log(Object.entries(d));
      const key = Object.entries(d)[0][0];
      const value = Object.entries(d)[0][1];
      if (!this.data[key] || !this.data[key][this.key]) {
        this.data[key] = { [this.key]: value };
      }
    });
    return this.data;
  }
}
module.exports = Cancer;
