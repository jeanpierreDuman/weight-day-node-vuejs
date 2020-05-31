const sql = require('./db');

const Weight = function(customer) {
    this.day = customer.day;
    this.weight = customer.weight;
};

Weight.create = (newWeight, result) => {
    sql.query("INSERT INTO weight SET ?", newWeight, (err, res) => {
        if(err) {
            console.log('error :', err);
            result(err, null);
            return;
        }
    })
}

Weight.list = result => {
    sql.query("SELECT * FROM weight", (err, res) => {
        if(err) {
            console.log('error :', err);
            result(err, null);
            return;
        }

        result(null, res);
    })
}

module.exports = Weight;