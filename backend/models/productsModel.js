const { Int32 } = require('bson')
const mongoose = require('mongoose')


// MongoDB has an _id field. don't need to add one
const productNamesSchema = mongoose.Schema({
    name: {
        type:     String,
        required: true,
    },
    type: {
        type:     String,
        required: true,
    },
    price: {
        type:     Number,
        required: true,
    },
})

module.exports = mongoose.model('ProductNames', productNamesSchema)