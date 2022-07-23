# Hack Midwest 2022 Project

IPFS + S3 api gateway

S3 is an ambiguous file storage API on the web, IPFS is a decentralized file system.  The idea is to give you a standard API (S3) to upload files to IPFS.

Current Goal:
- Upload & host a static site on Minio

Next Steps:
- upload files from minio to IPFS
    - use [minio client](https://docs.min.io/docs/minio-client-quickstart-guide.html)
        - `brew install minio/stable/mc`
- use rysnc(?) to generate manifest of new/changed files for IPFS upload
- host a static site on IPFS

## Getting Started

- Add the host entries below to your host file `/etc/hosts`
- make a `.env` file for minio username/password `MINIO_ROOT_USER` and `MINIO_ROOT_PASSWORD`
- spin up the services `docker compose up -d` 

## Local URL

(https://console.minio.hm22.local/login)[https://console.minio.hm22.local/login]

## Hosts file

```
127.0.0.1 hm22.local
127.0.0.1 ipfs.hm22.local
127.0.0.1 minio.hm22.local
127.0.0.1 console.minio.hm22.local
```
