const { Int32 } = require('bson')
const mongoose = require('mongoose')


// MongoDB has an _id field. don't need to add one
const productsSchema = mongoose.Schema({
    name: {
        type:     String,
        required: [true, 'Please add a name'],
    },
    type: {
        type:     String,
        required: [true, 'Please add a product type'],
    },
    price: {
        type:     Number,
        required: [true, 'Please add a price'],
    },
})

module.exports = mongoose.model('Products', productsSchema)