import { Router } from "express";
import loginRouter from "./login/route";

const router = Router();

router.use("/login", loginRouter);

// Route for API root
router.get("/", (_, res) => {
  res.send("Welcome API !!");
});

export default router;
