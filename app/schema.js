const { GraphQLSchema } = require('graphql');
const Query = require('./resolvers/Query/index.js');
const Mutation = require('./resolvers/Mutation/index.js');

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

module.exports = schema;