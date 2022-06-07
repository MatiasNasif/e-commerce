const express = require('express');
const router = express.Router();
const {Category, Product} = require('../models');

router.get('/:categories',function(req,res){
    Category.findOne({where: {nombre:req.params.categories},include: {model:Product}}).then((products)=>res.status(200).send(products)) 
    .catch(error=>console.log(error))
})

router.get('/categories',function(req,res){
    Category.findAll().then(categories=>res.status(200).send(categories))
    .catch(error=>console.log(error))
})

router.post('/categories', function(req,res){
    Category.create(req.body).then(category=>res.status(201).send(category))
    .catch(error=>console.log(error))
})

router.put('/categories/:id', function(req,res){
    Category.update(req.body,{where: {id:req.params.id},returning: true}).then(categoryEdit=>res.status(204).send(categoryEdit[1][0]))
    .catch(error=>console.log(error))
})

router.delete('/categories/:id',function(req,res){
    Category.destroy({where:{id:req.params.id}}).then(()=>res.sendStatus(202))
    .catch(error=>console.log(error))
})


module.exports = router;

