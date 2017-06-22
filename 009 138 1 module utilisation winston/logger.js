const winston = require('winston');
const config = require("config");

const logger = new winston.Logger({
    level: 'verbose',
    transports: [
      new winston.transports.Console({
        timestamp: true
      }),
      new winston.transports.File({
        filename: config.notes.logging.path,
        timestamp: true
      })
    ]
  });

console.log("logger chargé");

module.exports = logger;