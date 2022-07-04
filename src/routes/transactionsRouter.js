import { Router } from "express";
import transaction from "../controllers/transactionsController.js";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";
import transactionsSchema from "../middlewares/transactionsMiddleware.js";

const router = Router();

router.use(tokenValidationMiddleware);
router.post("/transaction", transactionsSchema, transaction);

export default router;