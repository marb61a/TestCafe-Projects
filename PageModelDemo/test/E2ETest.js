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
    
    await homepage.search("Apple MacBook Pro 13-inch");
    await t
        .click(searchresults.productTitle)
        .expect(getURL()).contains("apple-macbook-pro-13-inch")
        .expect(productdetails.productPrice.exists).ok()
        .selectText(productdetails.productQuantity).pressKey("delete")
        .typeText(productdetails.productQuantity, "3")
        .click(productdetails.addToCart)
        .expect(productdetails.successMessage.exists).ok()
        .wait(3000)
        .click(homepage.CartLink)
        .click(cartpage.termsLabel)
        .click(cartpage.checkoutBtn)
        .expect(getURL).contains("checkout");
    
    await checkoutpage.selectCountry('Ireland');
    await t
        .takeScreenshot()
        .typeText(checkoutpage.cityTxt, "Dublin")
        .typeText(checkoutpage.addressTxt, "123 ABC Test")
        .typeText(checkoutpage.zipTxt,'123456')
        .typeText(checkoutpage.phoneTxt,'332434345')
        .click(checkoutpage.continueBtn)
        .click(checkoutpage.nextDayOption)
        .click(checkoutpage.nextShippingBtn)
        .click(checkoutpage.nextPaymentBtn)
        .click(checkoutpage.nextConfirmBtn)
        .click(checkoutpage.confirmOrderBtn)
        .expect(checkoutpage.orderConfirmationMessage.exists).ok()
        .click(checkoutpage.viewOrderDetailsLink)
        .click(homepage.MyAccountLink)
        .click(myorderpage.orders)

});

test("Change Currency Test", async t => {
    await homepage.changeCurrency('Euro');
});
