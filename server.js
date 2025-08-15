const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const adapter = new FileAsync('mock/db/db.json');
const db = low(adapter);
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
// handling CORS


// if needed to be reached from another localhost server for local testing a distributed app f.e.
app.use(cors({
    origin: 'http://localhost:4200', // Adjust this to your frontend's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});
require('./app/routes')(app, db);

app.listen(port, () => {
    console.log('We are live on ' + port);
});
