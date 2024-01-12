const { GraphQLSchema } = require('graphql');
const Query = require('./handler/Query/index.js');
const Mutation = require('./handler/Mutation/index.js');

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

module.exports = schema;