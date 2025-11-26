import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "http://4.235.115.32:3000",
    changeOrigin: true,
  })
);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Proxy running on port " + PORT);
});
