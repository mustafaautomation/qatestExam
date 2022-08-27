'use strict';
const { Given, Before, After, When, Then, setDefaultTimeout } = require('cucumber');
const expect = require("chai")
const puppeteer = require("puppeteer")
const LoginPage = require("../../pages/LoginPage")
const DashboardPage = require("../../pages/DashboardPage")


setDefaultTimeout(60 * 1000);

let browser
let page
Before(async () => {

    browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true,
        args: [`--window-size=1920,1080`],
        defaultViewport: {
            width: 1200,
            height: 800
        }
    })
    page = await browser.newPage();
    await page.goto("https://demo.hnhconsulting.ca/#/qaexam1")

})

After(async () => {

    await browser.close();

})

Given('I launch the application', async function () {

    await page.waitForTimeout(2000);
    expect.assert.equal(await page.url(), await LoginPage.returnPageUrl(), 'User is on Login Screen');

})

Given('I login with {string} and {string}', async function (email, password) {

    await LoginPage.clickOnLogin(page, email, password)

})

When('I can add following user with name {string} with email of {string} and role as {string}', async function (username, email, role) {

    await DashboardPage.fillDetails(page, username, email, role)
    await page.waitForTimeout(2000);

})

Then(`I can validate that user is added with following details name: {string}, email: {string} and role:{string}`, async function (username, email, role) {

    await DashboardPage.checkDetails(page, username, email, role)
    await page.waitForTimeout(2000);

})

Then(`delete the user afterwards with follow email: {string}`, async function (email) {
    await page.waitForTimeout(2000);
    await DashboardPage.deleteElement(page, email)
    // const [deleteBtn] = await page.$x(`//td[normalize-space()='${email}']/..//button[@class='btn btn-danger btn-sm']`)

    // console.log(deleteBtn[0])
    // await deleteBtn[0].click()

})