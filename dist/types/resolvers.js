"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const countries = require("../db/countries.json");

var _default = {
  Query: {
    getCountry: (_, args, ctx) => {
      const country = countries.find(country => country.name.common.toLowerCase() === args.name.toLowerCase());
      return {
        name: country.name.common,
        capital: country.capital[0],
        languages: Object.values(country.languages),
        flag: country.flag
      };
    },
    getCurrencies: (_, args, ctx) => {
      const country = countries.find(country => country.name.common.toLowerCase() === args.country.toLowerCase());
      return Object.values(country.currencies);
    }
  }
};
exports.default = _default;