import { Router } from "express";
import config from "../../config/config";

const authRouter = Router();

// 1. Get example
authRouter.get("/login", (req, res) => {
    res.sendFile("index.html", { root: config.app_dir });
});

authRouter.post("/login", (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    res.send(`Username: ${username}, Password: ${password}`);
});

export default authRouter;