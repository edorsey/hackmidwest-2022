const express = require("express");
const minio = require("./minio");
const { create } = require("ipfs-http-client");

const ipfs = create({
  url: `${process.env.IPFS_HOST}/api/v0`,
});

const www = express();
www.use(express.json());

www.get("/webhooks/minio", (req, res) => {
  console.log(JSON.stringify(req.params));
  res.json(req.params);
});

www.post("/webhooks/minio", async (req, res) => {
  if (req.body.EventName === "s3:ObjectCreated:Put") {
    const bucket = req.body.Records[0].s3.bucket.name;
    const key = decodeURIComponent(req.body.Records[0].s3.object.key);

    try {
      let stats;
      try {
        stats = await minio.statObject(bucket, key);
      } catch (err) {
        throw new Error(
          `Failed to stat object. bucket: ${bucket}, key: ${key}`
        );
      }

      let stream;
      try {
        stream = await minio.getObject(bucket, key);
      } catch (err) {
        throw new Error(
          `Failed to get object. bucket: ${bucket}, key: ${key} `
        );
      }

      let result;
      try {
        result = await ipfs.add(stream);
      } catch (err) {
        throw new Error("Failed to add object to IPFS");
      }

      console.log({ stats, result });
    } catch (err) {
      res.status(500).json({
        status: "error",
        error: err.message,
      });
    }
  }

  res.json(req.body);
});

module.exports = www;
