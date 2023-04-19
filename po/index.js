const BasePage = require(`./BasePage`);
const LoginPage = require(`./LoginPage`);
const HomePage = require(`./HomePage`);
const FiltersPage = require(`./FiltersPage`);

class App {
	constructor() {
		this.BasePage = BasePage;
		this.LoginPage = LoginPage;
		this.HomePage = HomePage;
		this.FiltersPage = FiltersPage;
	}
}

module.exports = new App();