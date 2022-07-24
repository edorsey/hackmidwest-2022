const { create } = require("ipfs-http-client");

const ipfs = create({
  url: `${process.env.IPFS_HOST}/api/v0`,
});

module.exports = ipfs;
