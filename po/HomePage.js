const BasePage = require(`./BasePage`);

class HomePage extends BasePage {
	
    constructor(page, url = `ui/#administrate/projects`) {
		super(page);
		this.url = url;
        this.selectProjectButton = `.sidebar__main-block--3Agjk .projectSelector__project-selector--FXbsR`;
        this.filtersButton = `.sidebar__top-block--6oCNs .sidebar__sidebar-btn--1kGbJ', { hasText: 'Filters' }`;
    }
}

module.exports = new HomePage();