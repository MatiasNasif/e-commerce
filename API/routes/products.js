const express = require("express");
const router = express.Router();

const { Product } = require("../models");

router.get("/", (req, res) => { // funciona
  console.log("ESTOY ACA")
  Product.findAll()
    .then((data) => res.status(200).send(data))
    .catch(() => res.sendStatus(500));
});

router.get('/:id', (req, res) => {
  Product.findByPk(req.params.id)
  .then(data => res.send(data))
  .catch(error => console.log(error));
});

router.post("/add", (req, res) => { // funciona
  Product.findOrCreate({
    where: { ...req.body },
  })
    .then(([data, created]) => res.status(201).send(data))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.put("/:id", (req, res) => {
  Product.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  })
    .then((result) => {
      const data = result[1];
      res.status(200).send(data[0])
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.delete("/:id", function (req, res) {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
