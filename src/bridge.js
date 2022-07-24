const ipfs = require("./ipfs");
const minio = require("./minio");

async function handleEvent(event) {
  const bucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(event.Records[0].s3.object.key);

  if (event.EventName === "s3:ObjectCreated:Put") {
    return handlePutObject(bucket, key);
  }
}

async function handlePutObject(bucket, key) {
  let stats;
  try {
    stats = await minio.statObject(bucket, key);
  } catch (err) {
    throw new Error(
      `Failed to stat object. bucket: ${bucket}, key: ${key}, error: ${err.message}`
    );
  }

  let stream;
  try {
    stream = await minio.getObject(bucket, key);
  } catch (err) {
    throw new Error(
      `Failed to get object. bucket: ${bucket}, key: ${key}, error: ${err.message} `
    );
  }

  let ipfsAddResult;
  try {
    const opts = {
      content: stream,
      // path: `${bucket}/${key}`,
      wrapWithDirectory: false,
    };

    ipfsAddResult = await ipfs.add(opts);
  } catch (err) {
    throw new Error(`Failed to add object to IPFS. error: ${err.message}`);
  }

  let result;
  try {
    result = await minio.tagObject(bucket, key, {
      cid: ipfsAddResult.cid.toString(),
    });
  } catch (err) {
    throw new Error(
      `Failed to tag object. bucket: ${bucket}, key: ${key}, error: ${error}`
    );
  }

  let tags;
  try {
    tags = await minio.getObjectTags(bucket, key);
  } catch (err) {
    throw new Error(
      `Failed to get object tags. bucket: ${bucket}, key: ${key}, error: ${err.message}`
    );
  }

  return {
    stats,
    ipfsAddResult,
    result,
    tags,
    bucket,
    key,
  };
}

module.exports = { handleEvent, handlePutObject };
