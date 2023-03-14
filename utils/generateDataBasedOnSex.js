function generateDocBasedOnsex(data, key) {
  let bothSex;
  let female;
  let male;
  bothSex = data["All US"][0].B;
  female = data["All US"][0].C;
  male = data["All US"][0].D;
  return {
    [key]: {
      both_sexes_combined: +bothSex,
      female: +female,
      male: +male,
    },
  };
}

module.exports = generateDocBasedOnsex;
