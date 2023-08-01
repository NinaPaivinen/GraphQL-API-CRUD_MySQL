const { GraphQLObjectType } = require('graphql');

const fieldsDog = require('./dog');
const fieldsDogs = require('./dogs');

//***************KYSELYT , KUN HAETAAN TIETOJA EI MUOKATA */

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    // Query yhdelle koiralle
    /*kysely:
{
dog (id:1) {
  id, kutsumanimi} }
    */
    dog: fieldsDog,
    // Query kaikille kkoirille
   dogs: fieldsDogs

  }
});

module.exports = Query;