
//requiring the library
const mongoose = require('mongoose');

//setting up the connection
mongoose.connect("mongodb://localhost/to_do_listdb");

//checking the connection
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'there is an error in connection to mongodb database'));

//if the server is up and running
db.once('open', function () { console.log('the database connection is succesful'); });

