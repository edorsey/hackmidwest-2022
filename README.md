# S3 to IPFS bridge

S3 is a ubiquitous file storage API on the web, IPFS is a decentralized file system. The idea is to give you a standard API (S3) to upload files to IPFS.

web3 and self-hosting should go together like chocolate and peanut butter, but there has yet to be a lot of cross-over. This aims to change that.

Many self-hosted application allow you to use S3 for object storage. Services like [Minio](https://minio.com) offer APIs that are compatible and make it possible to self-host your own object storage.

The goal of this project is allow you to make use of IPFS in projects that have no understanding of what IPFS is and take advantage of it for glacier-like self-hosted cold storage.

## Getting Started

- Add the host entries below to your host file `/etc/hosts`
- make a `.env` file for minio username/password `MINIO_ROOT_USER` and `MINIO_ROOT_PASSWORD`
- spin up the services `docker compose up -d`

## Build static site & push to Minio

```
docker compose up build-static
docker compose up push-static
```

## Limitations

Currently, this is only really (maybe) suited for static sites that PUT their entire contents to an S3 bucket on deploy. One-off puts will break the IPNS pointer.

Using tags and S3's listObjects API should be able to allow support for one-off PUTs, much larger batches of updates, and much larger buckets to be supported.

## Local URLs

* [Example static site on Minio](https://hm22.local)
* [Minio Console](https://console.minio.hm22.local)
* [Minio API](https://minio.hm22.local)
* [IPFS Web UI](https://ipfs.hm22.local/webui)
* [IPFS Gateway](https://ipfs-gateway.hm22.local)

## Hosts file

```
127.0.0.1 hm22.local
127.0.0.1 ipfs.hm22.local
127.0.0.1 minio.hm22.local
127.0.0.1 console.minio.hm22.local
127.0.0.1 api.hm22.local
127.0.0.1 ipfs-gateway.hm22.local
```
