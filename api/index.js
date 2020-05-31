const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./controllers/default.controller')(app);
require('./controllers/weight.controller.js')(app);

app.listen(3333, function() {
    console.log('Server is running on http://localhost:3333/');
});