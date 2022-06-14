const fake_data = require('../fake_api.json');
const { Product } = require('../models');
const db = require('./index');

db.sync({ force: true })
    .then(() => Product.bulkCreate(fake_data))
    .then(() => console.log("seed finalizado"))