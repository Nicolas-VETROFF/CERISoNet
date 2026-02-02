import { Router } from "express";
import config from "../../config/config";

const authRouter = Router();

// 1. Get example
authRouter.get("/login", (req, res) => {
  res.sendFile("index.html", { root: config.app_dir });
});

authRouter.post("/login", (req, res) => {
  const credentials = {
    username: 'admin',
    password: 'admin'
  }
  const { username, password } = req.body;

  if (username === credentials.username && password === credentials.password) {
    res.send("Login successful!");
  } else {
    res.status(401).send("Invalid username or password");
  }
});

export default authRouter;
