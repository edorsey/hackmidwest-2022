<template>
  <div class="relative bg-white">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <!-- <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="https://user-images.githubusercontent.com/23458977/180629852-917b3043-6c1a-4078-8941-17e61a7d8dff.png" alt="" /> -->
        <iframe
          class="h-56 w-full object-cover lg:absolute lg:h-full"
          src="https://whimsical.com/embed/DLqqqsfZh25a2cXEhvygLc"
        ></iframe>
      </div>
    </div>
    <div
      class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2"
    >
      <div class="lg:col-start-2 lg:pl-8">
        <div
          class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0"
        >
          <p class="mt-8 text-lg text-gray-500">
            S3 represents a ubiquitous storage API.
          </p>
          <p class="mt-8 text-lg text-gray-500">
            IPFS can be used in a similar manner but is more similar to AWS
            Glacier in the capabitilies it gives you.
          </p>
          <p>
            This project bridges an S3-compatible object store called Minio to
            IPFS, so that puts to Minio will result in the bucket being synced
            to a local IPFS node.
          </p>
          <p>
            Many popular self-hosted, but non-web3 projects allow you to store
            assets in an S3-compatible API. This legacy apps a way to take
            advantage of the unique capabilities of IPFS and web3 without having
            to re-architect how they store data.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
