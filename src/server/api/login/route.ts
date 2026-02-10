import { Router } from "express";

const loginRouter = Router();

// TODO: Add comments
loginRouter.post("/", (req, res) => {
  // TODO: Connect with PostgreSQL to verify user credentials

  // Dummy credentials and verification
  const credentials = {
    username: 'admin',
    password: 'admin'
  }

  const { username, password } = req.body;

  if (username === credentials.username && password === credentials.password) {
    console.log("User logged with username '" + username + "'");
    res.json({ success: true, message: "Login successful" });
  } else {
    console.log("Wrong username '" + username + "' or password");
    res.status(401).json({ success: false, message: "Invalid username or password" });
  }
});

export default loginRouter;
