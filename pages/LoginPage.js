const puppeteer = require("puppeteer")

class LoginPage {

    constructor() {

        this.emailLoginField = `input[placeholder='Username']`,
            this.passLoginField = `input[placeholder='Password']`,
            this.submitBtn = `button[type='submit']`
        this.pageURL = `https://demo.hnhconsulting.ca/#/login`

    }

    async clickOnLogin(page, email, password) {

        await page.waitForSelector(this.emailLoginField)
        await page.click(this.emailLoginField)
        await page.type(this.emailLoginField, email)
        await page.click(this.passLoginField)
        await page.type(this.passLoginField, password)
        await page.click(this.submitBtn)

    }

    async returnPageUrl() {
        return this.pageURL;
    }



}

module.exports = new LoginPage()