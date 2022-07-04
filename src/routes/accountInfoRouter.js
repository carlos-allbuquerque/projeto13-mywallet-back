import { Router } from "express";
import getAccountInfo from "../controllers/getAccountInfoController.js";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";

const router = Router();

router.use(tokenValidationMiddleware);
router.get("/history", getAccountInfo);

export default router;