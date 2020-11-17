import { Selector } from "testcafe";

class CheckoutPage {
    constructor(){
        this.countryList = Selector("select[id='BillingNewAddress_CountryId']");
        this.cityTxt = Selector("input[id='BillingNewAddress_City']");
        this.addressTxt = Selector("input[id='BillingNewAddress_Address1']");
        this.zipTxt = Selector("input[id='BillingNewAddress_ZipPostalCode']");
        this.phoneTxt = Selector("input[id='BillingNewAddress_PhoneNumber']");

    }
}

export default new CheckoutPage();