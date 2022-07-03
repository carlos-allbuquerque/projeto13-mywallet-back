import { Router } from "express";
import { createUser } from "../controllers/authController.js";
import userMiddleware from "../middlewares/userMiddleware.js";
import passwordMiddleware from "../middlewares/passwordMiddleware.js";

const router = Router();

router.post("/subscription",passwordMiddleware, userMiddleware, createUser);

export default router;