const config = {
  maxConcurrency: 2,
  verbose: true,
  reporters: ['jest-silent-reporter', 'summary'],
  preset: "jest-puppeteer",
};
  
module.exports = config;