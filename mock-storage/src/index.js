const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const storagePath = path.join(__dirname, "../storage");
console.log(`Storing files at ${storagePath}`);

app.get("/video", (req, res) => {
  const videoId = req.query.id;
  const localFilePath = path.join(storagePath, videoId);
  res.sendFile(localFilePath);
});

app.post("/upload", (req, res) => {
  const videoId = req.headers.id;
  const localFilePath = path.join(storagePath, videoId);
  const fileWritesStream = fs.createWriteStream(localFilePath);
  req.pipe(fileWritesStream)
    .on("error", err => {
      console.error("Upload failed.");
      console.error(err && err.stack || err);     
    })
    .on("finish", () => {
      res.sendStatus(200);
    });
});

const port = process.env.PORT && parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`Microservice mock-storage online`);
});

