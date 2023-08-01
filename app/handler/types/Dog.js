const { GraphQLObjectType, 
   GraphQLString, 
   GraphQLID} = require('graphql');

const DogType = new GraphQLObjectType({
  name: 'Dog',
  fields: () => ({
    id: {  type: GraphQLID //GraphQLINT 
      },
   kennelnimi: {   type: GraphQLString
       },
    kutsumanimi: {   type: GraphQLString
     },
     syntymapaiva: {   type: GraphQLString
      },
      kennel: {   type: GraphQLString
       },
      sukupuoli: {   type: GraphQLString
        },
       created_at: {   type: GraphQLString
         },
       updated_at: {   type: GraphQLString
          }
    })
  
});

module.exports = DogType;