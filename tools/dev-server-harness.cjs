// Temp static server for the browser harness (repo root: userscript/).
const http = require("http");
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..", "userscript");
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json" };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/test/harness.html";
  const file = path.join(root, p);
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end("nf"); return;
  }
  res.writeHead(200, { "Content-Type": types[path.extname(file)] || "text/plain", "Cache-Control": "no-store" });
  fs.createReadStream(file).pipe(res);
}).listen(8731, "127.0.0.1", () => console.log("harness on http://127.0.0.1:8731/"));
