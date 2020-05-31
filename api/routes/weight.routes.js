module.exports = app => {
    const weight = require('../controllers/weight.controller');

    app.post('/weight/create', weight.create);
}