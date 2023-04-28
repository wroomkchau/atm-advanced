const common = {
	parallel: 1,
	require: [
		`steps/*.js`
	],
	paths: [
		`tests/*.feature`
	],
	format: [
		`html:reports/cucumber-report.html`, 
        `json:reports/cucumber-report.json`,
        `junit:reports/cucumber-report.xml`, 
        `progress`,
		`xray-formatter:reports/xray.json`
	],
	formatOptions: {
		jiraOptions: {
			regexp: /(J-\d+)/,
			report: `./reports/xray.json`
		}
	},
    publishQuiet: true,
    dryRun: false,
};
module.exports = {
    default:common
};
