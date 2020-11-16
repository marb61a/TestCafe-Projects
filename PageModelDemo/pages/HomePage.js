import { Selector,t } from 'testcafe';

class HomePage{
    constructor(){
        this.subtitleHeader = Selector('h2')
            .withText('Welcome to the store');
        this.RegisterLink = Selector('a').withText('Register');
        this.LoginLink = Selector('a').withText('Log in');
        this.CartLink = Selector('a').withText('Shopping cart');
        this.MyAccountLink = Selector('a').withText('My account');
        this.LogoutLink = Selector('a').withText('Log out');
        this.currencyList = Selector("select#customerCurrency");

    }

    getproductSearch(){
        return Selector("input[id='small-searchterms']");
    }

    async search(){
        await t
            .typeText(this.productSearch, product)
            .wait(3000)
            .pressKey('enter');
    }

}

export default new HomePage();
