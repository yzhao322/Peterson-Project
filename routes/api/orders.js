const express = require("express");
const router = express.Router();

const Order = require("../../models/order");

//get api/items
router.get("/", (req, res) => {
  Order.find()
    .sort({ date: -1 })
    .then((orders) => res.json(orders));
});

router.post("/", (req, res) => {
  console.log('order req body: ', req.body)
  Order.create(req.body).then((order) => res.json(order));
});

router.delete("/:id", (req, res) => {
  Produce.findById(req.params.id)
    .then((order) => order.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
