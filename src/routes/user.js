import { Router } from 'express';
import userController from '../controllers/user/index.js'

const router = Router();

router.get('/getUser', userController.getUserById)
router.get('/getUsers', userController.getAllUsers)
router.post('/addUser', userController.addUser)
router.put('/editUser', userController.editUser)
router.put('/deleteUser', userController.deleteUser)

export default router;