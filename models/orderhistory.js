const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderHistorySchema = new Schema({
    username: {
        type: String,
        required: true
    },
    items: [{
        name: {
            type: String,
            required: true,
        },
        purchased: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    }],
    total: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
    // ,
    // },
    //     {
    //         toJSON: { virtuals: true },
    //         toObject: { virtuals: true }
    //     })

    // OrderSchema.virtual('totalCost').get(function () {
    //     return this.items.reduce(function (accum, item) {
    //         return accum + item.price
    //     }, 0)
})


const OrderHistory = mongoose.model("orderhistory", OrderHistorySchema);
module.exports = OrderHistory;

