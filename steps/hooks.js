const { Before, BeforeAll, After, AfterAll } = require(`@cucumber/cucumber`);
const { chromium } = require(`@playwright/test`);
// const App = require ('../po/');
const fs = require('fs');

BeforeAll(async () => {	
	fs.writeFileSync('combined.log', '');
	browser = await chromium.launch(
		{
		  headless: false,
		  logger: {
		    isEnabled: (name, severity) => name === 'browser',
		    log: (name, severity, message, args) => console.log(`${name} ${message}`)
		  }
		}
	);
});

Before(async () => {
	context = await browser.newContext();
	page = await context.newPage();
	await page.goto(`http://localhost:8080`);
});

After(async function () {
	await context.close();
});

AfterAll(async function () {
	await browser.close();
});