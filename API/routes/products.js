const express = require("express");
const router = express.Router();

const { Product } = require("../models");

router.get("/", (req, res) => { 
  Product.findAll()
    .then((data) => res.status(200).send(data))
    .catch((e) => console.log(e));
});

router.get('/:id', (req, res) => {
  Product.findByPk(req.params.id)
  .then(data => res.send(data))
  .catch(error => console.log(error));
});

router.post("/add", (req, res) => { 
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

router.get("/search/:type/:input", (req, res) => {
  if(req.params.type === "name") {
    Product.getAllWhereName(req.params.input)
    .then(data => res.status(200).send(data))
    .catch((e) => console.log("no se encontro nombre, error: ", e));
  }
  
  if(req.params.type === "description") {
    Product.getAllWhereDescription(req.params.input)
    .then(data => res.status(200).send(data))
    .catch((e) => console.log("no se encontro descripcion, error: ", e))
  }

  if(req.params.type === "category") {
    Product.getAllWhereCategory(req.params.input)
    .then(data => res.status(200).send(data))
    .catch((e) => console.log("no se encontro categoria, error: ", e))
  }
})

module.exports = router;
