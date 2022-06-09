const express = require('express');
const passport = require('passport');
const { User } = require('../models');

const users = express.Router();

users.post('/register', (req, res) => {
    User.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(error => console.log(error));
});

// CHEQUEAR SI ESTÁ OK EL MIDDLEWARE DE PASSPORT UNA VEZ QUE ESTÉ CONFIGURADO

users.post('/login', passport.authenticate('local'), (req, res) => {
    User.findOne({ where: {
        email: req.body.email
    }})
    .then(user => res.send(user));
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

/* users.put('/make_admin/:id', (req, res, next) => {
    User.update(req.body, { 
        where: { id: req.params.id },
        returning: true
        })
    .then(([updatedRows, user]) => {
        res.status(201).send(user[0])
    })
    .catch(next)
}); */






/* users.get('/', (req, res) => {
    User.findAll()
    .then(users => res.send(users))
    .catch(error => console.log(error));
});

users.get('/:id', (req, res) => {
    User.findByPk(req.params.id)
    .then(user => res.send(user))
    .catch(error => console.log(error));
});


users.put('/:id/favs', (req, res) => {
    User.findByPk(req.params.id)
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
}); */

module.exports = users