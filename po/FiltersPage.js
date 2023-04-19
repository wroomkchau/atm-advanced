const BasePage = require(`./BasePage`);

class FiltersPage extends BasePage {
	
    constructor(page, url = `ui/#superadmin_personal/filters`) {
		super(page);
		this.url = super.url + url;
    }
}

module.exports = new FiltersPage();