const express = require("express");
const router = express.Router();


// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../../config/middleware/isAuthenticated");


const OrderHistory = require("../../models/orderhistory");

//get api/items
router.get("/", isAuthenticated,(req, res) => {
    OrderHistory.find()
        .then((orderhistory) => res.json(orderhistory));
});

router.post("/",(req, res) => {
    OrderHistory.create(req.body).then((orderhistory) => res.json(orderhistory));
});

router.delete("/:id",isAuthenticated, (req, res) => {
    OrderHistory.findById(req.params.id)
        .then((orderhistory) => orderhistory.remove().then(() => res.json({ success: true })))
        .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;