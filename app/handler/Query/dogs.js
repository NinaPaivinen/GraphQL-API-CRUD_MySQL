const { GraphQLList } = require('graphql');
const { dbQuery } = require('../../db.asetukset');
const  DogType  = require('../types/Dog'); // {DogType} undefined

const fieldsDogs = {
  type: new GraphQLList(DogType),
  async resolve(_, {}){
    let res = await dbQuery(`SELECT * FROM powderpuff`);
    return res;
  }
};

module.exports = fieldsDogs;