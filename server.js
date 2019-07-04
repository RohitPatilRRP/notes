const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connection
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("connected");    
}).catch(err => {
    console.log(err);
    process.exit();
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json({"message": "Welcome to application."});
});

require('./app/routes/note.routes.js')(app);
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
