const winston = require('winston');
require('winston-mail').Mail;
const config = require("config");

const logger = new winston.Logger({
    transports: [
      new winston.transports.Console({
        timestamp: true,
        level: 'info'
      }),
      new winston.transports.File({
        filename: config.notes.logging.path,
        timestamp: true,
        level: 'error'
      }),
       new winston.transports.Mail({
        to: config.notes.mail.to,
        from: config.notes.mail.from,
        subject: config.notes.mail.subject,
        host: config.notes.mail.host,
        username: config.notes.mail.username,
        password: config.notes.mail.password,
        port: config.notes.mail.port,
        tls: config.notes.mail.tls,
        ssl: config.notes.mail.ssl,
        level: 'error'
      })
    ]
  });

console.log("logger chargé");

module.exports = logger;