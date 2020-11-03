const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');
const bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
    // app.get('/', (req, res) => {
    //     // const uri = 'mongodb+srv://hmdawood:Dawood_TechMate@cluster0.atars.mongodb.net/falak?retryWrites=true&w=majority';
    //     // mongoose.connect(uri, {
    //     //         useNewUrlParser: true,
    //     //         useUnifiedTopology: true
    //     //     })
    //     //     .then((client) => {
    //     //         console.log("client values is", client)
    //     //         const quotesCollection = client.collection('quotes')
    //     //         quotesCollection.inventory.insertOne({ item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } })
    //     //         console.log('Monog db connected')
    //     //     })
    //     //     .catch(err => console.log(err))
    //     res.send('Hello World!')
    // })
require('./routes/note.routes')(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})