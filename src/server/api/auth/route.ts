import { Router } from "express";

const authRouter = Router();

// Route for user login
authRouter.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("Received login attempt with username '" + username + "' and password '" + password + "'");
  res.send("Login attempt received");
});

// TODO: uncomment for step 2 with PostgreSQL integration
// authRouter.post("/login", (req, res) => {
//   // TODO: Connect with PostgreSQL to verify user credentials

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
