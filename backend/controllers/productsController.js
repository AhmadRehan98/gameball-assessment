const asyncHandler = require('express-async-handler')
// Database "table" of id => product name
const Products = require('../models/productsModel')

// @desc     Get Product
// @route    GET /api/products
// @access   Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Products.find({})

    res.status(200).json({products})
})


// @desc     Set Product
// @route    POST /api/products
// @access   Private
const setProduct = asyncHandler(async (req, res) => {
    // grab product name, type, and price from request body
    const { name, type, price } = req.body
    // if one field is empty, refuse product creation
    if(!name || !type || !price){
        res.status(400)
        throw new Error('Please add all product fields')
    }

    // check if product exists, increment the items in stock
    // not implemented, but it'll go something like this:
    // const productExists = await Products.findOne(req.params.id)
    // if (productExists){
    //     res.status(200).json({message: 'product exists. updating items in stock'})
    // call updateProduct()
    // }
    // 

    // create her adds product to DB.
    const product = await Products.create({
        name:  name,
        type:  type,
        price: price
    })

    // if product entry created successfully.
    if(product){
        res.status(201).json({
            message: 'Added product',
            _id:      product.id,
            name:     product.name,
            type:     product.type,
            price:    product.price
        })
    }
})

// @desc     Update products
// @route    PUT /api/products/:id
// @access   Private
const updateProduct = asyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id)

    if(!product){
        res.status(400)
        throw new Error("Product not found")
        // or alternatively, call setProduct()
    }

    const updatedProduct = await Products.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json({message: `Updated product: ${updatedProduct}`})
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