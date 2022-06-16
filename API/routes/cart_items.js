const express = require('express');
const { Cart_item } = require('../models');

const cart_items = express.Router();

cart_items.post('/:cart_id/:product_id/add', (req, res) => {
    Cart_item.create({ 
        cartId: req.params.cart_id,
        productId: req.params.product_id
    })
    .then(item => res.status(201).send(item))
    .catch(error => console.log(error));
});

cart_items.put('/:product_id/:modify', (req, res, next) => {
    Cart_item.findByPk(req.params.product_id)
    .then(item => {
        return Cart_item.update({
            quantity: req.params.modify === '+1'
            ? item.quantity + 1
            : item.quantity -1
        }, { 
        where: { productId: req.params.product_id },
        returning: true
        })
    })
    .then(([updatedRows, itemQ]) => {
        res.status(201).send(itemQ[1])
    })
    .catch(next)
});

cart_items.delete('/:product_id', (req, res) => {
    Cart_item.destroy({ where: { productId: req.params.product_id } })
    .then(() => res.sendStatus(202))
    .catch(err => console.log(err))
});

module.exports = cart_items