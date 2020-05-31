const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./routes/weight.routes.js')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

app.listen(3333, function() {
    console.log('Server is running on http://localhost:3333/');
});