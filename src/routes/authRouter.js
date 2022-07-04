import { Router } from "express";
import { createAccount, loginAccount } from "../controllers/authController.js";
import createAccountMiddleware from "../middlewares/createAccountMiddleware.js";
import loginAccountMiddleware from "../middlewares/loginAccountMiddleware.js";
import passwordMiddleware from "../middlewares/passwordMiddleware.js";

const router = Router();

router.post("/signup",passwordMiddleware, createAccountMiddleware, createAccount);
router.post("/login", loginAccountMiddleware, loginAccount);

export default router;