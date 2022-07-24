# S3 to IPFS bridge

S3 is an ubiquitous file storage API on the web, IPFS is a decentralized file system. The idea is to give you a standard API (S3) to upload files to IPFS.

Current Goal:

- Upload & host a static site on Minio

Next Steps:

- ~~use rysnc(?) to generate manifest of new/changed files for IPFS upload~~
- [x] host a static site on IPFS
- [x] upload files from [minio](https://www.npmjs.com/package/minio) to [IPFS](https://www.npmjs.com/package/ipfs-js)
- [x] add IPFS content address to Minio Object as a tag
- [x] add IPNS address to Minio Object as a tag

## Getting Started

- Add the host entries below to your host file `/etc/hosts`
- make a `.env` file for minio username/password `MINIO_ROOT_USER` and `MINIO_ROOT_PASSWORD`
- spin up the services `docker compose up -d`

## Build static site & push to Minio

`docker compose up build-static`
`docker compose up push-static`

## Local URL

(https://console.minio.hm22.local/login)[https://console.minio.hm22.local/login]

## Hosts file

```
127.0.0.1 hm22.local
127.0.0.1 ipfs.hm22.local
127.0.0.1 minio.hm22.local
127.0.0.1 console.minio.hm22.local
127.0.0.1 api.hm22.local
127.0.0.1 ipfs-gateway.hm22.local
```
