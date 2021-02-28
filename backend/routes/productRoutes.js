import express from 'express'
const router = express.Router()
import { isAdmin, protect } from '../middleware/authMiddleware.js'
import { getProducts, getProductById, addImage, addProduct } from '../controllers/productController.js'
import upload from "../utils/fileUpload.js";


router.route('/').get(getProducts).post(protect, isAdmin, addProduct).post(addProduct)
router.route('/:id').get(getProductById)
router.route('/').post(addProduct)
// router.route('/uploadImage').post(upload.single('image'), addImage)
export default router