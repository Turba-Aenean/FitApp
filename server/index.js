const express = require('express');
const db = require('../database/schema.js');
const body_parser = require('body-parser');
const collections = require('../database/collections.js'); // db functions live in here
const app = express();
const port = 4000;
const graphQLSchema = require('./graphQLSchema.js');

// app.use('/graphql', body_parser.json(), graphqlExpress({schema: graphQLSchema}));

// app.post('/users', (req, res) => {
// 	// use params in axios requests to pass in data.
// 	collections.usernameTaken(req.query.username, (bool) => {
// 		if (bool) {
// 			res.send('username taken.');
// 		} else {
// 			collections.createUser(req.query).then((response) => {
// 				res.status(201).send(response)
// 			});
// 		}
// 	});
// });


app.listen(port, () => console.log('Listening on port', port));
