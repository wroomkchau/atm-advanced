const winston = require(`winston`);
const {combine, timestamp} = winston.format;

const logger = winston.createLogger({
	level: `debug`,
	transports: [
		new winston.transports.Console({
			format: combine(
				timestamp({
					format: `YYYY-MM-DD HH:mm:ss`
				}),
				winston.format.colorize({
					all: true
				})
			),
			level: `info`
		}),
		new winston.transports.File({
			filename: `combined.log`,
			format: combine(
				timestamp({
					format: `YYYY-MM-DD HH:mm:ss`
				})
			),
			level: `debug`
		}),
	],
});

module.exports = {
	logger
};
