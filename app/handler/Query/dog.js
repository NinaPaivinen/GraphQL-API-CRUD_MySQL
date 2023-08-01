const { GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
const { dbQuery } = require('../../db.asetukset');
const DogType  = require('../types/Dog.js');

const fieldsDog = {
  type:DogType,
  args: {
    id: { type: GraphQLInt }
  },
  async resolve(_, { id }){
    let res = await dbQuery(`SELECT * FROM powderpuff WHERE id = ${id}`);
    return res[0];
  }
};

module.exports = fieldsDog;