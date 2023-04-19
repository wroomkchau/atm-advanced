class BasePage {

    constructor(page) {
      this.page = page;
      this.url = `https://localhost:8080/`;
    }

    async goto() {
      await page.goto(this.url);
    }

    async waitFor(element) {
	  await page.waitForSelector(element);
      await page.locator(element).waitFor({state: 'visible'});
	}

  }

  module.exports = BasePage;