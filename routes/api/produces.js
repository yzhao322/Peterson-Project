const express = require("express");
const router = express.Router();

const Produce = require("../../models/produce");

//get api/items
router.get("/", (req, res) => {
  Produce.find()
    .then((produces) => res.json(produces));
});

router.post("/", (req, res) => {
  Produce.create(req.body).then((produce) => res.json(produce));
});

router.delete("/:id", (req, res) => {
  Produce.findById(req.params.id)
    .then((produce) => produce.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
