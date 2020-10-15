// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
const MONGO_URI = 'mongodb+srv://user:cs3219task@cs3219task.46u77.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI || 'mongodb://localhost/cs3219', { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Send message for default URL
app.get('/', (req, res) => res.send('Hi, this is Task B of CS3219'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port

module.exports = app; //for testing purposes
exports.startPoint = app;