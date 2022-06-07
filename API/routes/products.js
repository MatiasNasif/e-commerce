const express = require("express");
const router = express.Router();

const { Product } = require("../models");

router.get("/", (req, res) => {
  Product.findAll()
    .then((data) => res.send(data).statusCode(200))
    .catch(() => res.sendStatus(500));
});

router.get("/:id", function (req, res) {
  Product.findOne({
    where: { id: req.params.id },
  })
    .then((data) => {
      if (data) res.send(data);
      else res.sendStatus(404);
    })
    .catch((error) => console.log(error));
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

router.put("/modify/:id", (req, res) => {
  Product.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  })
    .then((result) => {
      const data = result[1];
      res.json({
        message: "Updated successfully",
        data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.delete("delete/:id", function (req, res) {
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
