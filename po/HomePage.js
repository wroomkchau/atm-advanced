const BasePage = require(`./BasePage`);

class HomePage extends BasePage {
	
    constructor(page, url = `ui/#administrate/projects`) {
		super(page);
		this.url = url;
        this.selectProjectButton = `.sidebar__main-block--3Agjk .projectSelector__project-selector--FXbsR`;
        this.filtersButton = `svg[viewBox="0 0 17 17"]`;
    }
}

module.exports = new HomePage();