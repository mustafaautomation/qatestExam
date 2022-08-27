const puppeteer = require("puppeteer")

class DashboardPage {

    constructor() {


        this.userNameField = '#userName';
        this.userEmailField = '#userEmail';
        this.userRoleField = '#userRole';
        this.submitBtn = `button[type='submit']`;
        this.resetBtn = `//button[normalize-space()='Reset']`;
        this.avatarImg = `.avatar-img`
        this.logoutBtn = `//a[normalize-space()='Logout']`
        this.pageURl = `https://demo.hnhconsulting.ca/#/qaexam1`
        this.pageTitle = 'HnH App'

    }

    async fillDetails(page, username, email, userRole) {

        await page.waitForSelector(this.userEmailField)
        await page.type(this.userNameField, username)
        await page.type(this.userEmailField, email)
        await page.type(this.userRoleField, userRole)
        await page.click(this.submitBtn)

    }

    async checkDetails(page, username, email, userRole) {

        await page.waitForXPath(`//td[normalize-space()='${username}']`);
        await page.waitForXPath(`//td[normalize-space()='${email}']`);
        await page.waitForXPath(`//td[normalize-space()='${userRole}']`);

    }

    async deleteElement(page, email) {

        await page.hover(`div[aria-busy='false'] div[class='card-body']`)
        await page.waitForXPath(`//td[normalize-space()='${email}']`);
        const prcf = await page.$x(`//td[normalize-space()='${email}']/..//button[@class='btn btn-danger btn-sm']`)


    }




}

module.exports = new DashboardPage()