import {Router} from "express";

import controller from '../controllers/users.js';

console.log(controller)

const router = Router();

router.get("/login", controller.login);

export default router;
