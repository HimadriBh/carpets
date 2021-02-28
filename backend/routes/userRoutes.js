import express from 'express'
const router = express.Router()
import { authUser, getUserProfile, getUsers, deleteUser, registerUser, updateUserProfile } from '../controllers/userController.js'
import { isAdmin, protect } from '../middleware/authMiddleware.js'

router.route('/register').post(registerUser)
router.route('/').get(protect, isAdmin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, isAdmin, deleteUser)
export default router 