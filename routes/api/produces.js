const express = require("express");
const router = express.Router();

const Produce = require("../../models/produce");

//get api/items
router.get("/", (req, res) => {
  Produce.find().then((produces) => res.json(produces));
});

router.post("/", (req, res) => {
  Produce.create(req.body).then((produce) => res.json(produce));
});

router.delete("/:id", (req, res) => {
  Produce.findById({ _id: req.params.id })
    .then((produce) => produce.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

router.put("/", (req, res) => {
  console.log('req.body._id: ', req.body._id)
  console.log('req.body.inventory: ', req.body.inventory)
  Produce.findByIdAndUpdate(
    req.body._id,
    { inventory: req.body.inventory },
    { new: true }
  )
    .then((produces) => res.json(produces))
    .catch(err => console.log('end point err: ', err))
})

module.exports = router;
