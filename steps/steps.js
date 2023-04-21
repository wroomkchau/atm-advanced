const { Given, Then, When } = require ('@cucumber/cucumber');
const { expect } = require ('@playwright/test');
const loginPage = require(`../po/LoginPage`);
const homePage = require(`../po/HomePage`);
const filtersPage = require(`../po/FiltersPage`);

  Given('I am logged in', async function () {
    await loginPage.waitFor(loginPage.idField);
    await loginPage.waitFor(loginPage.passwordField);
    await loginPage.waitFor(loginPage.loginButton);

    await page.locator(loginPage.idField).type('superadmin');
    await page.locator(loginPage.passwordField).type('erebus');
    await page.locator(loginPage.loginButton).click();
    await homePage.waitFor(homePage.selectProjectButton);
  });
  
  When('I click "homePage.filtersButton"', async function () {
    await homePage.waitFor(homePage.filtersButton);
    await page.locator(homePage.filtersButton).click();
  });

  When('I open base url with {string}', async function (urlPart) {
    const url = 'http://localhost:8080/' + urlPart;
    await page.goto(url);
	  await page.waitForSelector(homePage.filtersButton);
  });
  
  Then('I should be on "Filters" page', async function () {
    await expect(page).toHaveURL(/.*filters/);
    await filtersPage.waitFor(filtersPage.pageTitle);
    await expect(page.locator(filtersPage.pageTitle)).toHaveText('Filters');
  });