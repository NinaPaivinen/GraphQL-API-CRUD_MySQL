const { GraphQLString } = require('graphql');
const { dbQuery } = require('../../db.asetukset');
const  DogType  = require('../types/Dog.js');

const addDog = {
  type: DogType,
  args: {
    kennelnimi: { type: GraphQLString },
    kutsumanimi: { type: GraphQLString },
    syntymapaiva: { type: GraphQLString },
    kennel: { type: GraphQLString },
    sukupuoli: { type: GraphQLString },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  },
  async resolve(_, { kennelnimi, kutsumanimi, syntymapaiva, kennel, sukupuoli, created_at, updated_at }){
    let res = await dbQuery(`insert into powderpuff (kennelnimi, kutsumanimi, syntymapaiva, kennel, sukupuoli, created_at, updated_at) values ('${kennelnimi}', '${kutsumanimi}', '${syntymapaiva}', '${kennel}', '${sukupuoli}', '${created_at}', '${updated_at}')`);
    return { id: res.insertId, kutsumanimi }
  }
};

module.exports = addDog;