const logger = require(`../support/logger.config`).logger;
const loginPage = require(`./po/LoginPage`);
const homePage = require(`./po/HomePage`);


const filterItems = [
    `Launch Number`,
    `Description`,
    `Owner`,
    `Start Time`,
    `Attribute`
];

describe('Filters page', () => {

    it('Data driven test', async () => {
      const page = await browser.newPage();
      await page.goto('http://localhost:8080');
      await loginPage.waitFor(loginPage.idField);
      await loginPage.waitFor(loginPage.passwordField);
      await loginPage.waitFor(loginPage.loginButton);

      await page.locator(loginPage.idField).type('superadmin');
      logger.info(`"superadmin" text was typed to ${await page.locator(loginPage.idField)}`);
      await page.locator(loginPage.passwordField).type('erebus');
      logger.info(`"erebus" text was typed to ${await page.locator(loginPage.passwordField)}`);
      await page.locator(loginPage.loginButton).click();
      logger.info(`${await page.locator(loginPage.loginButton)} was clicked`);
      await homePage.waitFor(homePage.selectProjectButton);
      console.log('ready for array');
    }, 20000);

});