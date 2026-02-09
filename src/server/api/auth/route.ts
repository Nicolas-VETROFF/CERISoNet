import { Router } from "express";
import config from "../../config/config";

const authRouter = Router();

authRouter.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("Received login attempt with username '" + username + "' and password '" + password + "'");
  res.send("Login attempt received");
});

// authRouter.post("/login", (req, res) => {
//   // TODO: Connect with MongoDB to verify user credentials

//   // Dummy credentials and verification
//   const credentials = {
//     username: 'admin',
//     password: 'admin'
//   }

//   const { username, password } = req.body;

//   if (username === credentials.username && password === credentials.password) {
//     console.log("User logged with username '" + username + "' and password '" + password + "'");
//     res.send("Login successful!");
//   } else {
//     console.log("Wrong username '" + username + "' or password '" + password + "'");
//     res.status(401).send("Invalid username or password");
//   }
// });

export default authRouter;
