const express = require("express");
const Minio = require("minio");
const { create } = require("ipfs-http-client");

const minioClient = new Minio.Client({
  endPoint: "minio.hm22.local",
  port: 443,
  useSSL: true,
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
});

const ipfs = create({
  url: "https://ipfs.hm22.local/api/v0",
});

const www = express();
www.use(express.json());

www.get("/webhooks/minio", (req, res) => {
  console.log(JSON.stringify(req.params));
  res.json(req.params);
});

www.post("/webhooks/minio", async (req, res) => {
  console.dir(JSON.stringify(req.body));

  if (req.body.EventName === "s3:ObjectCreated:Put") {
    const bucket = req.body.Records[0].s3.bucket.name;
    const key = req.body.Records[0].s3.object.key;
    const stats = await new Promise((resolve, reject) => {
      minioClient.statObject(bucket, key, (err, stats) => {
        if (err) return reject(err);
        resolve(stats);
      });
    });

    console.log({ stats });
  }
  const chunks = [];
  for await (const chunk of ipfs.cat(
    "QmZR261HKPgtX9qWTiqKdD727uxSA4MPkF7NuvJAhspMeH"
  )) {
    chunks.push(chunk);
  }

  const buf = Buffer.concat(chunks);

  console.log({ buf }, buf.toString());
  res.json(req.body);
});

module.exports = www;
