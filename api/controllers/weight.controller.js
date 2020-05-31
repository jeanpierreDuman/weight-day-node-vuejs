const Weight = require('./../models/weight.model');

module.exports = app => { 

    app.get("/weight", (req, res) => {
        Weight.list((err, data) => {
            if(err) {
                res.send(500).send({
                    message:
                        err.message || "Some error"
                })
            } else {
                res.status(200).send({
                    data: data
                });
            }
        });
    });

    app.post("/weight/create", (req, res) => {
        if(!req.body) {
            res.status(400).send({
                message: 'Request body cannot be empty'
            })
        }
    
        if(req.body.weight == null || req.body.day == null) {
            res.status(400).send({
                message: 'Weight or Day is missing'
            })
        } else {
            const weight = new Weight({
                weight: req.body.weight,
                day: req.body.day
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
            
            res.status(200).send({
                message: 'weight is added !'
            });
        }
    });
}