const { GraphQLObjectType } = require('graphql');
const addDog = require('./addDog');
const deleteDog = require('./deleteDog.js');
const updateDog = require('./updateDog.js');

//****************MUTATION KUN MUOKATAAN JOTAKIN TIETOA */

/*********** LISÄÄÄ

mutation{
  addDog(kennelnimi: "mimos", kutsumanimi: "mey  mimoss", syntymapaiva: "03.03.2023", kennel: "dsadsds", sukupuoli:"uros", created_at:"23.2.2023", updated_at: "23.2.2023")
  {kennelnimi,kutsumanimi,syntymapaiva,kennel, sukupuoli,created_at, updated_at,}}
}
}
///////////// POISTA

mutation{
 deleteDog
(id:1) {
   id
 } }

 //// PÄIVITÄ
 
mutation{
  updateDog(id: "2", kennelnimi: "mimos", kutsumanimi: "mey  mimoss", syntymapaiva: "03.03.2023", kennel: "dsadsds", sukupuoli:"uros", updated_at: "23.2.2023")
  {kennelnimi,kutsumanimi,syntymapaiva,kennel, sukupuoli,updated_at,}}
}
}


*/

const Mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    // tee uusi koira
    addDog: addDog,
    deleteDog: deleteDog,
    updateDog: updateDog
  }
});

module.exports = Mutation;