const express = require("express");
const router = express.Router();

const OrderHistory = require("../../models/orderhistory");

//get api/items
router.get("/", (req, res) => {
    OrderHistory.find()
        .then((orderhistory) => res.json(orderhistory));
});

router.post("/", (req, res) => {
    OrderHistory.create(req.body).then((orderhistory) => res.json(orderhistory));
});

router.delete("/:id", (req, res) => {
    OrderHistory.findById(req.params.id)
        .then((orderhistory) => orderhistory.remove().then(() => res.json({ success: true })))
        .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;