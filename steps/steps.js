const { Given, Then, When } = require ('@cucumber/cucumber');
const { expect } = require ('@playwright/test');
const loginPage = require(`../po/LoginPage`);
const homePage = require(`../po/HomePage`);

  Given('I am logged in', async function () {
    await loginPage.waitFor(loginPage.idField);
    await loginPage.waitFor(loginPage.passwordField);
    await loginPage.waitFor(loginPage.loginButton);

    await page.locator(loginPage.idField).type('superadmin');
    await page.locator(loginPage.passwordField).type('erebus');
    await page.locator(loginPage.loginButton).click();
    await homePage.waitFor(homePage.selectProjectButton);
  });
  
  When('I click {string}', async function (element) {
    await homePage.waitFor(element);
    await page.locator(element).click();
  });

  // When('I open base url with {string}', async function (urlPart) {
  //   let url = 'https://localhost:8080/' + urlPart;
  //   await page.goto(url);
  //   await page.waitForSelector('.sidebar__sidebar--1J7aD');
  // });
  
  // Then('I should be on "Filters" page', async function () {
  //   await expect(page).toHaveURL(/.*filters/);
  // });