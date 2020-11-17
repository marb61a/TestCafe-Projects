import { ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import registerpage from '../pages/RegisterPage';
import loginpage from '../pages/LoginPage';
import customerpage from '../pages/CustomerPage';

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);

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
        .expect(getURL()).contains('register');
});
