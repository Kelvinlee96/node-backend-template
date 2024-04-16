import { Router } from "express";
import bodyParser from "body-parser";
import userController from "./user.js";

const router = Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use('/user', userController)

export default router;