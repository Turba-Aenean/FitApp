const express = require('express');
const db = require('../database/schema.js');
const models = require('../database/models.js')
const admin = require('firebase-admin');
const graphqltools = require('graphql-tools');
const app = express();
const port = 4000;
const TOKEN = require('../../TOKENS.js');
const serviceAccount = require("../../serviceAccount.json");
const body_parser = require('body-parser');
const collections = require('../../database/collections.js'); // db functions live in here
const graphQLSchema = require('../../database/graphQLSchema.js');
const resolvers = require('../../database/resolvers.js');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');



// var firebaseDb = admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: TOKEN.firebaseConfig.databaseURL
// });

// var database = firebaseDb.database();

app.use('/graphql', graphqlHTTP({
	schema: graphqltools.makeExecutableSchema({typeDefs: graphQLSchema, resolvers: resolvers}),
	graphiql: true,
	context: collections
}));

// function pushMessge(roomId, message){ //ADD THIS MESSAGE TO THIS ROOM
//     database.ref('/rooms/' + roomId + '/messages').push(message)
// }

// function roomsListenerSetup(roomsArray){ //ADDS EVENTLISTENER FOR NEW MESSAGES TO THESE ROOMS
//     roomsArray.map((roomId)=>{
//         database.ref('/rooms/' + roomId + '/messages').on("value", function(snapshot){
//             console.log(snapshot.val());
//         }, 
//         function(errorObject){
//             console.log("the read failed: " + errorObject.code);
//         })
//     })
// }
    
app.listen(port, () => console.log('Listening on port', port));