const express = require('express');
const { Cart, Product } = require('../models');

const carts = express.Router(); // chequear si queda nombre users o router

carts.post('/add', (req, res) => {
    Cart.create()
        .then(cart => {
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
        .then(result => res.send(result[1]))
        .catch(e => console.log(e))
});

carts.delete('/:id', (req, res) => {
    Cart.destroy({ where: { id: req.params.id } })
        .then(() => res.sendStatus(202))
        .catch(err => console.log(err))
});

carts.get('/:cart_id', (req, res) => {
    Cart.findAll({ where: { id: req.params.cart_id }, include: Product })
        .then(arr => res.send(arr))
        .catch(err => console.log(err))
})

module.exports = carts;