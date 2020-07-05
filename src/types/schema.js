const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getCountry(name: String): Country
    getCurrencies(country: String): [Currency]
  }

  type Country {
    name: String
    capital: String
    languages: [String]
    flag: String
  }
  type Currency {
    name: String
    symbol: String
  }
`;

module.exports = typeDefs;
