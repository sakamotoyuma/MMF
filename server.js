import express from "express";
// または CommonJS を使うなら: const express = require('express');

const app = express();
app.use(express.json());

app.post("/ai", (req, res) => {
  res.json({ reply: "server OK" });
});

// Render は PORT 環境変数でポートを渡す（デフォルト10000）。
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/healthz", (req, res) => {
  res.send("ok");
});
