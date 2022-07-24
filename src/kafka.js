const { Kafka, logLevel } = require("kafkajs");

const config = {
  clientId: "worker",
  brokers: [process.env.KAFKA_BROKER],
  logLevel: logLevel.ERROR,
};

const kafka = new Kafka(config);

module.exports = kafka;
