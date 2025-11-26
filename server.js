const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use("/", createProxyMiddleware({
  target: "http://4.235.115.32:3000",
  changeOrigin: true
}));

app.listen(10000, () => console.log("Proxy running"));
