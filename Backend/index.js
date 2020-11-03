const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');
const bodyParser = require('body-parser');
mongoose.Promise = global.Promise;

// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

require('./routes/routes')(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})