import { Router } from "express";
import authRouter from "./auth/route";

const router = Router();

router.use("/auth", authRouter);

// Route for API root
router.get("/", (_, res) => {
  res.send("Welcome API !!");
});

export default router;
