const Weight = require('../models/weight.model');

exports.create = (req, res) => {
    
    if(!req.body) {
        res.status(400).send({
            message: 'Content cannot be empty !'
        })
    }

    const weight = new Weight({
        weight: body.weight,
        day: body.day
    });

    Weight.create(weight, (err, data) => {
        if(err) {
            res.status(500).send({
                message: 'An error appeared in adding weight'
            })
        } else {
            res.send(data);
        }
    })
};