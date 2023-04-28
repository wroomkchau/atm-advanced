const BasePage = require(`./BasePage`);

class LoginPage extends BasePage {
	
    constructor(page, url = `ui/#login`) {
		super(page);
		this.url = url;
        this.idField = '.loginForm__login-field--2NeYx input';
        this.passwordField = '.loginForm__password-field--2IH1A input';
        this.loginButton = '.loginForm__login-form--3XCs3 button';
    }

}

module.exports = new LoginPage();