const express = require('express');
const passport = require('passport');
const { User } = require('../models');

const users = express.Router();

users.post('/register', (req, res) => {
    User.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(error => console.log(error));
});

users.post('/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user)
});

users.post('/logout', (req, res, next) => {
    req.logout(function(err){
        if(err){return next(err);}
        res.sendStatus(200);
    });
});

users.put('/:id', (req, res, next) => {
    User.update(req.body, { 
        where: { id: req.params.id },
        returning: true
        })
    .then(([updatedRows, user]) => {
        res.status(201).send(user[0])
    })
    .catch(next)
});

users.get('/me', (req, res) => {
    if(!req.user) {
      return res.sendStatus(401)
    }
    res.send(req.user);
});

users.get('/admin/list_users', (req, res) => {
    User.findAll()
        .then(users => res.send(users))
        .catch(err => console.log(err));
});

users.put('/admin/make_admin/:id', (req, res, next) => {
    User.update({ admin: true }, {
        where: { id: req.params.id },
        returning: true,
        plain: true
        })
        .then(user => res.status(201).send(user[1]))
        .catch(err => console.log(err));
});

users.delete('/admin/:id', (req, res) => {
    User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(202))
    .catch(err => console.log(err))
});

module.exports = users;