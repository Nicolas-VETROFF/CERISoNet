import express from "express";
import config from "./config/config";
import router from "./api/route";
import fs from "fs";
import https from "https";

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// TODO: Remove this route in step 2
app.get("/login", (req, res) => {
  res.sendFile("index.html", { root: config.app_dir });
});

// Starts HTTPS server
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, app).listen(config.port_https, () => {
  console.log("HTTPS Server running on port " + config.port_https);
});
