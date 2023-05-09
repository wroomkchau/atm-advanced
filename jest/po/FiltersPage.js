const BasePage = require(`./BasePage`);

class FiltersPage extends BasePage {
	
    constructor(page, url = `ui/#superadmin_personal/filters`) {
		super(page);
		this.url = super.url + url;
    this.pageTitle = `.pageBreadcrumbs__page-breadcrumbs-item--1GzrN span`
    }
}

module.exports = new FiltersPage();