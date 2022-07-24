const request = require("supertest");
const www = require("./www");
const minioFixtures = require("./minio-fixtures.json");

describe("webhooks", () => {
  it("should handle put event", async () => {
    const { status, body } = await request(www)
      .post("/webhooks/minio")
      .send(minioFixtures[minioFixtures.length - 1]);

    console.log({ status, body });
  });
});
