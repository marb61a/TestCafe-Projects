import { ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import registerpage from '../pages/RegisterPage';
import searchresults from '../pages/SearchResultPage'
import productdetails from '../pages/ProductDetailsPage'
import cartpage from '../pages/CartPage'
import checkoutpage from '../pages/CheckoutPage'
import myorderpage from '../pages/MyOrdersPage'

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'martin'+randomNumber+'@test.com';

fixture ('E2E Fixture')
    .page(URL);

test("Assert Home Page", async t => {
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(homepage.subtitleHeader.exists).ok();
});

test("Place order E2E test", async t => {
    await t
        .maximizeWindow()
        .click(homepage.RegisterLink)
        .expect(getURL()).contains('register')
        .click(registerpage.GenderOption)
        .typeText(registerpage.FirstName, 'Martin')
        .typeText(registerpage.LastName, 'Byrne')
        .typeText(registerpage.Email, userEmail)
        .typeText(registerpage.Password, 'ABC123')
        .typeText(registerpage.ConfirmPassword, 'ABC123')
        .click(registerpage.RegisterButton)
        .expect(registerpage.SuccessfullMessage.exists).ok();
        
});
