const express = require('express');
const { Cart } = require('../models');

const carts = express.Router(); // chequear si queda nombre users o router

carts.post('/add', (req, res) => {
    Cart.create(req.user)
    .then(cart => res.status(201).send(cart))
    .catch(error => console.log(error));
});

carts.put('/:id', (req, res, next) => {
    Cart.update(req.body, { 
        where: { id: req.params.id },
        returning: true
        })
    .then(([updatedRows, user]) => {
        res.status(201).send(user[0])
    })
    .catch(next)
});

carts.delete('/:id', (req, res) => {
    Cart.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(202))
    .catch(err => console.log(err))
});

module.exports = carts