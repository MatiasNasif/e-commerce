const express = require('express');
const { Cart_item } = require('../models');

const cart_items = express.Router(); // chequear si queda nombre users o router

cart_items.post('/add', (req, res) => {
    Cart_item.create( req.product, req.carts )
    .then(item => res.status(201).send(item))
    .catch(error => console.log(error));
});

cart_items.put('/:id', (req, res, next) => {
    Cart_item.update(req.body, { 
        where: { id: req.params.id },
        returning: true
        })
    .then(([updatedRows, item]) => {
        res.status(201).send(item[1])
    })
    .catch(next)
});

cart_items.delete('/:id', (req, res) => {
    Cart_item.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(202))
    .catch(err => console.log(err))
});

module.exports = cart_items