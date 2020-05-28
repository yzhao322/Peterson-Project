const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    items: [{
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: false,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
        }
    }],
    date: {
        type: Date,
        default: Date.now,
    },
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

OrderSchema.virtual('totalCost').get(function () {
    return this.items.reduce(function (accum, item) {
        return accum + item.price
    }, 0)
})


const Order = mongoose.model("order", OrderSchema);
module.exports = Order;