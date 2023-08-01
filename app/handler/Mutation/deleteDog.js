const { GraphQLID } = require('graphql');
const { dbQuery } = require('../../db.asetukset');
const  DogType  = require('../types/Dog.js');

const deleteDog = {
  type: DogType,
  args: {
    id: { type: GraphQLID }
  },
  async resolve(_, { id }){
    let res = await dbQuery(`DELETE FROM powderpuff WHERE id = ${id}`);
    return console.log("Poistettu!")
  }
};

module.exports = deleteDog;
