const Minio = require("minio");

const defaultOptions = {
  endPoint: process.env.MINIO_HOST,
  port: parseInt(process.env.MINIO_PORT, 10),
  useSSL: !process.env.MINIO_SSL_OFF,
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
};

const minio = new Minio.Client(defaultOptions);

const getObject = (bucketName, objectKey) => {
  return new Promise((resolve, reject) => {
    minio.getObject(bucketName, objectKey, (err, dataStream) => {
      if (err) return reject(err);
      resolve(dataStream);
    });
  });
};

const statObject = (bucketName, objectKey) => {
  return new Promise((resolve, reject) => {
    minio.statObject(bucketName, objectKey, (err, stats) => {
      if (err) return reject(err);
      resolve(stats);
    });
  });
};

const tagObject = (bucketName, objectKey, tagList) => {
  return new Promise((resolve, reject) => {
    minio.setObjectTagging(bucketName, objectKey, tagList, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

const getObjectTags = (bucketName, objectKey) => {
  return new Promise((resolve, reject) => {
    minio.getObjectTagging(bucketName, objectKey, (err, tagList) => {
      if (err) return reject(err);
      resolve(tagList);
    });
  });
};

module.exports = { getObject, statObject, tagObject, getObjectTags };
