const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..", "dashboard");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

const server = http.createServer((req, res) => {
  const cleanPath = req.url.split("?")[0] === "/" ? "/index.html" : req.url.split("?")[0];
  const filePath = path.join(rootDir, cleanPath);

  if (!filePath.startsWith(rootDir) || !fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  res.writeHead(200, {
    "Content-Type": contentTypes[path.extname(filePath)] || "text/plain; charset=utf-8",
  });
  res.end(fs.readFileSync(filePath));
});

server.listen(port, host, () => {
  console.log(`Dashboard running at http://${host}:${port}`);
});
