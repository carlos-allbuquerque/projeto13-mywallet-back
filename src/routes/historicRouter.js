import { Router } from "express";
import getHistoric from "../controllers/historicController.js";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";

const router = Router();

router.use(tokenValidationMiddleware);
router.get("/historic", getHistoric);

export default router;