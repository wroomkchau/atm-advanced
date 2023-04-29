const { Given, Then, When } = require ('@cucumber/cucumber');
const { expect } = require ('@playwright/test');
const loginPage = require(`../po/LoginPage`);
const homePage = require(`../po/HomePage`);
const filtersPage = require(`../po/FiltersPage`);
const logger = require(`../support/logger.config`).logger;

  Given('I am logged in', async function () {
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
  });
  
  When('I click "homePage.filtersButton"', async function () {
    await homePage.waitFor(homePage.filtersButton);
    await page.locator(homePage.filtersButton).click();
    logger.info(`${await page.locator(homePage.filtersButton)} was clicked`);
  });

  When('I open base url with {string}', async function (urlPart) {
    const url = 'http://localhost:8080/' + urlPart;
    await page.goto(url);
	  await page.waitForSelector(homePage.filtersButton);
    logger.info(`${url} was opened`);
  });
  
  Then('I should be on {string} page', async function (rpPage) {
    let a = `.*${rpPage}`
    let reg = new RegExp(a)
    await expect(page).toHaveURL(reg);
    const pages = {
      dashboard : `ALL DASHBOARDS`,
      launches : `ALL LAUNCHES`,
      filters : `FILTERS`,
      settings : `SETTINGS`,
      members : `PROJECT MEMBERS`
    }
    console.log();
    let pageElement = await page.getByText(pages[rpPage]).first();
    await expect(pageElement !== undefined ).toBeTruthy();
    logger.info(`Page url contains "/${rpPage}" text`);
  });