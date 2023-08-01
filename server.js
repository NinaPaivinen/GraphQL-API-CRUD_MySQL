// tuodaan käyttöön expressipiä

const express = require('express')
// tuodaan käyttöön Apollo Serveriä
//const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
// tuodaan schema tiedosto
const schema = require('./app/schema');

const { graphqlHTTP } = require('express-graphql');

// serverin portti
const GRAPHQL_PORT = 8080;

// käytetään expressiä 
const app = express();

// json käyttöön expressille
//app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }));

app.use('/', graphqlHTTP({
  graphiql: true,
  schema: schema
}));

// toimiiko serveri?
app.listen(GRAPHQL_PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
));
