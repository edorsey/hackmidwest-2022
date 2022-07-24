const express = require("express");

const www = express();

www.use(express.json());

www.get("/webhooks/minio", (req, res) => {
  console.log(JSON.stringify(req.params));
  res.json(req.params);
  a;
});

www.post("/webhooks/minio", (req, res) => {
  console.dir(JSON.stringify(req.body));
  res.json(req.body);
});

module.exports = www;
