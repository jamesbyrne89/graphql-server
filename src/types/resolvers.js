const countries = require("../db/countries.json");

export default {
  Query: {
    getCountry: (_, args, ctx) => {
      const country = countries.find(
        (country) =>
          country.name.common.toLowerCase() === args.name.toLowerCase()
      );
    return {
      name: country.name.common,
      capital: country.capital[0],
      languages: Object.values(country.languages),
      flag: country.flag
    }
    },
    getCurrencies: (_, args, ctx) => {
      const country = countries.find(country => country.name.common.toLowerCase() === args.country.toLowerCase());
      return Object.values(country.currencies);
  }
}
};
