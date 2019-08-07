const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// Connect all routes
app.use('/api', require('./routes/movie'));

app.listen(5000, () => {
    console.log(`Server running at http://localhost:5000`);
});