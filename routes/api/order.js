const express = require("express");
const router = express.Router();

const Order = require("../../models/order");

//get api/items
router.get("/", (req, res) => {
    Order.find()
        .then((order) => res.json(order));
});

router.post("/", (req, res) => {
    Order.create(req.body).then((order) => res.json(order));
});

router.delete("/:id", (req, res) => {
    Order.findById(req.params.id)
        .then((order) => order.remove().then(() => res.json({ success: true })))
        .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
