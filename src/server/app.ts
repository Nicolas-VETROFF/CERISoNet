import express from "express";
import config from "./config/config";
import router from "./api/route";
import fs from "fs";
import https from "https";

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the Angular build output (JS/CSS/assets)
app.use(express.static(config.app_dir));

app.use("/api", router);

// SPA fallback: serve index.html for any non-API route so Angular can handle routing
// Fallback middleware: handle any non-API request by returning index.html
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) return next();
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
