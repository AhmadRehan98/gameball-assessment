const asyncHandler = require('express-async-handler')
// Database "table" of id => product name
const Products = require('../models/productsModel')

// @desc     Get Product
// @route    GET /api/products
// @access   Private
const getProducts = asyncHandler(async (req, res) => {
    const products = await Products.find({})

    res.status(200).json({products})
})


// @desc     Set Product
// @route    POST /api/products
// @access   Private
const setProduct = asyncHandler(async (req, res) => {
    // TODO: require 3 fields not just 'text'
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const product = await Products.create({
        name: req.body.text
    })
    res.status(200).json({message: 'Set goals'})
})

// @desc     Update products
// @route    PUT /api/products/:id
// @access   Private
const updateProduct = asyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id)

    if(!product){
        res.status(400)
        throw new Error("Product not found")
    }

    const updatedProduct = await Products.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json({message: `Update product: ${updatedProduct}`})
})

// @desc     Delete products
// @route    DELETE /api/products/:id
// @access   Private
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id)

    if (!product){
        res.status(400)
        throw new Error('Product not found')
    }

    await product.remove()
    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getProducts, 
    setProduct, 
    updateProduct, 
    deleteProduct,
}