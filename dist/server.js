"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _apolloServer = require("apollo-server");

var _schema = _interopRequireDefault(require("./types/schema"));

var _resolvers = _interopRequireDefault(require("./types/resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const start = () => {
  const server = new _apolloServer.ApolloServer({
    typeDefs: _schema.default,
    resolvers: _resolvers.default,
    introspection: true,
    playground: true
  });
  server.listen({
    port: process.env.PORT || 4000
  }).then(({
    url
  }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

exports.start = start;