class BasePage {

    constructor(page) {
      this.page = page;
      this.url = `https://localhost:8080/`;
    }

    async goto() {
      await page.goto(this.url);
    }

    async waitFor(element) {
	  await page.waitForSelector(element, {
      visible: true,
    });
	}

  }

  module.exports = BasePage;