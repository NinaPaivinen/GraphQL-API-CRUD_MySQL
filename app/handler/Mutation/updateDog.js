const { GraphQLID, GraphQLString } = require('graphql');
const { dbQuery } = require('../../db.asetukset');
const  DogType  = require('../types/Dog.js');

const updateDog = {
  type: DogType,
  args: {
    id: { type: GraphQLID },
    kennelnimi: { type: GraphQLString },
    kutsumanimi: { type: GraphQLString },
    syntymapaiva: { type: GraphQLString },
    kennel: { type: GraphQLString },
    sukupuoli: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  },
  async resolve(_, {id, kennelnimi, kutsumanimi, syntymapaiva, kennel, sukupuoli, updated_at }){
    let res = await dbQuery(`UPDATE powderpuff SET kennelnimi='${kennelnimi}', kutsumanimi='${kutsumanimi}', syntymapaiva='${syntymapaiva}', kennel='${kennel}', sukupuoli='${sukupuoli}', updated_at='${updated_at}' WHERE id='${id}'`);
  }
};

module.exports = updateDog;