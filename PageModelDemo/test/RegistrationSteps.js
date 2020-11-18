import { ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import registerpage from '../pages/RegisterPage';
import loginpage from '../pages/LoginPage';
import customerpage from '../pages/CustomerPage';

const dataSet = require('../data/data.json');

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
// var userEmail = 'martin'+randomNumber+'@test.com';

fixture("Registration Fixture")
    .page(URL);

test('Assert home page', async t => {
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(homepage.subtitleHeader.exists).ok()        
});

test("User registration and Login test", async t => {
    await t
        .click(homepage.RegisterLink)
        .expect(getURL()).contains('register')
        .click(registerpage.GenderOption)
        .typeText(registerpage.FirstName,data.firstname)
        .typeText(registerpage.LastName,data.lastname);

        await registerpage.selectDay(data.birthday);
        await registerpage.selectMonth(data.birthmonth);
        await registerpage.selectYear(data.birthyear);
        
        await t
            .typeText(registerpage.Email, userEmail)
            .typeText(registerpage.Password, 'ABC123')
            .typeText(registerpage.ConfirmPassword, 'ABC123')
            .click(registerpage.RegisterButton)
            .expect(registerpage.SuccessfullMessage.exists).ok()
            .click(homepage.LogoutLink)
            .click(homepage.LoginLink)
            .expect(loginpage.accountHeader.exists).ok()
            .typeText(loginpage.emailInput, userEmail)
            .typeText(loginpage.passwordInput, 'ABC123')
            .click(loginpage.submitButton)
            .click(homepage.MyAccountLink)
            .expect(customerpage.ordersLink.exists).ok()
            .click(customerpage.ordersLink)
            .expect(customerpage.noOrdersLabel.exists).ok()            
            .takeScreenshot();
});
