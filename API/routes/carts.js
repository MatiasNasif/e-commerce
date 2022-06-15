const express = require('express');
const { Cart } = require('../models');

const carts = express.Router(); // chequear si queda nombre users o router

carts.post('/add', (req, res) => {
    Cart.create()
    .then(cart => {
        console.log(cart)
        res.status(201).send(cart)
    })
    .catch(error => console.log(error));
});

carts.put('/:cart_id/:user_id', (req, res, next) => {
    Cart.findByPk(req.params.cart_id)
    .then(cart => {
        return Cart.update({ sessionId: req.params.user_id }, {
            where: { id: cart.id },
            returning: true,
            plain: true
        })
    })
    .then(res => console.log('CARRITO DESPUES DE UPDATE ES :::', res[1]))
    .catch(e => console.log(e))
});

carts.delete('/:id', (req, res) => {
    Cart.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(202))
    .catch(err => console.log(err))
});

module.exports = carts