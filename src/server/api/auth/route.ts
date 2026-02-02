import { Router } from "express";

const authRouter = Router();

// 1. Get example
authRouter.get("/login", (req, res) => {
    res.send("Login Page");
});

authRouter.post("/login", (req, res) => {
    const { username, password } = req.body;
    res.send(`Username: ${username}, Password: ${password}`);
});

export default authRouter;