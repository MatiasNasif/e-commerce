const express = require('express');
const passport = require('passport');
const { Users } = require('../models');

const users = express.Router();

users.post('/register', (req, res) => {
    Users.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(error => console.log(error));
});

// CHEQUEAR SI ESTÁ OK EL MIDDLEWARE DE PASSPORT UNA VEZ QUE ESTÉ CONFIGURADO

users.post('/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user);
});

users.post('/logout', (req, res, next) => {
    req.logout(function(err){
        if(err){return next(err);}
        res.sendStatus(200);
    });
});

users.put('/:id', (req, res, next) => {
    Users.update(req.body, { 
        where: { id: req.params.id },
        returning: true
        })
    .then(([updatedRows, user]) => {
        res.status(201).send(user[0])
    })
    .catch(next)
});

users.get('/', (req, res) => {
    Users.findAll()
    .then(users => res.send(users))
    .catch(error => console.log(error));
});

users.get('/:id', (req, res) => {
    Users.findByPk(req.params.id)
    .then(user => res.send(user))
    .catch(error => console.log(error));
});







users.put('/:id/favs', (req, res) => {
    Users.findByPk(req.params.id)
      .then(user => {
            return Users.update({ favs: req.body.favs }, {
              where: { id: user.id },
              returning: true,
              plain: true
          })
      })
      .then(favs => {
          console.log('FAVS SERIA ESTO: ',favs)
          res.send(favs[1])
          })
      .catch(error => console.log(error))
});

module.exports = users