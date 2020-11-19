const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const registerpage = require('../../pages/RegisterPage');

const URL = 'https://demo.nopcommerce.com/register'; 

Given('I open the registration page', async function () {
    await testController.navigateTo(URL);
});

When('I select the gender', async function () {
    await testController
        .click(registerpage.RegisterPage.GenderButton());
});

When('I enter First Name {string}', async function (firstname) {
    await testController
        .typeText(registerpage.RegisterPage.FirstName(), firstname);
});

When('I enter Last Name {string}', async function (lastname) {
    await testController
        .typeText(registerpage.RegisterPage.Lastname(),lastname);
});

When('I select Date of Birth {string}', async function (day) {
    await testController
        .click(registerpage.RegisterPage.DateOfBirth());
    await testController
        .click(registerpage.RegisterPage.ListOption().withText(day));
});

When('I select Month of Birth {string}', async function (month) {
    await testController
        .click(registerpage.RegisterPage.MonthOfBirth());
    await testController
        .click(registerpage.RegisterPage.ListOption().withText(month));
});

When('I select Year of Birth {string}', async function (year) {
    await testController
        .click(registerpage.RegisterPage.YearOfBirth());
    await testController
        .click(registerpage.RegisterPage.ListOption().withText(year));    
});

When('I enter Email {string}', async function (email) {

});

When('I enter Password {string}', function (string) {

});

When('I enter Confirm Password {string}', function (string) {

});

When('I click register button', function () {

});

Then('successful message is displayed', function () {

});