class Cancer {
  constructor() {
    this.data = {};
    this.category = [];
    // this.key = key;
  }
  generateData(dataType, category) {
    this.category.push(category);
    dataType.forEach((d) => {
      const key = Object.entries(d)[0][0];
      const value = Object.entries(d)[0][1];
      if (!this.data[key]) {
        this.data[key] = { [category]: value };
      } else {
        this.data[key][category] = value;
      }
    });
    return this;
  }
  fillEmptyCategory() {
    for (let i in this.data) {
      //   const key = Object.keys(i)[0];
      const value = this.data[i];
      const keyOfValue = Object.keys(value);
      for (let j of this.category) {
        if (!keyOfValue.includes(j)) {
          this.data[i][j] = "n/a";
        }
      }
    }
    return this.data;
  }
}
module.exports = Cancer;
