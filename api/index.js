var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        firstname: "Jean-Pierre",
        lastname: "Duman",
        email: "duman.jeanpierre@gmail.com"
    })
    );
});

app.listen(8000, function() {
    console.log('Server is running on http://localhost:8000/');
});