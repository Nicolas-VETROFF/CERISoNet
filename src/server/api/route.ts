import { Router } from "express";
import authRouter from "./auth/route";

const router = Router();

router.use("/auth", authRouter);

authRouter.get("/", (req, res) => {
    res.send("Hello World");
});

export default router;