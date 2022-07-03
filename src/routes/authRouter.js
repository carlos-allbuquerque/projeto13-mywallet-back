import { Router } from "express";
import { createUser } from "../controllers/authController.js";
import createAccountMiddleware from "../middlewares/accountMiddleware.js";
import passwordMiddleware from "../middlewares/passwordMiddleware.js";

const router = Router();

router.post("/subscription",passwordMiddleware, createAccountMiddleware, createUser);
router.get("/login");

export default router;