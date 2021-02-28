import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc         Fetch all products
//@route        GET /api/products
//@access       Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
})

//@desc         Fetch single product
//@route        GET /api/product/:id
//@access       Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not Found')
    }
})

const addImage = asyncHandler(async (req, res) => {
    try {
        return res.status(201).json({
            message: 'File uploded successfully'
        });
    } catch (error) {
        res.status(404)
        throw new Error('Image not uploaded')
    }

})

const addProduct = asyncHandler(async (req, res) => {
    console.log('inside add product controller');
    const { name, desc, brand, price, countInStock } = req.body;
    const file = req.files.file;

    console.log(name)
    console.log(file)
    console.log(desc)
    console.log(brand)
    console.log(price)
    console.log(countInStock)
    res.json({
        name, desc, brand, price, countInStock
    })
})

export {
    getProducts,
    getProductById,
    addImage,
    addProduct
}