const { GraphQLObjectType, 
   GraphQLString, 
   GraphQLID} = require('graphql');
const { PASSWORD } = require('../../db.private');

const AdminType = new GraphQLObjectType({
  name: 'Admin',
  fields: () => ({
    id: {  type: GraphQLID //GraphQLINT 
      },
    email: {   type: GraphQLString
       },
    name: {   type: GraphQLString
     },
     password: {   type: GraphQLString
     }
    })
  
});

module.exports = AdminType;