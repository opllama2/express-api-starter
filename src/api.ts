import { Router } from "express";
import healthEndpoints from "./modules/health";
import userEndpoints from "./modules/user";

const router = Router();

router.use(healthEndpoints);
router.use("/user", userEndpoints);

export default router;
