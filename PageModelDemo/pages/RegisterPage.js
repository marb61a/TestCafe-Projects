import { Selector,t } from 'testcafe';

class RegisterPage {
    constructor(){
        this.GenderOption = Selector('#gender-male');
        this.FirstName = Selector('#FirstName');
        this.LastName = Selector('#LastName');

        this.DateOfBirthDayList = Selector("select[name='DateOfBirthDay']");
        this.DateOfBirthMonthList = Selector("select[name='DateOfBirthMonth']");
        this.DateOfBirthYearList = Selector("select[name='DateOfBirthYear']");        

        this.Email = Selector('#Email');
    }
}

export default RegisterPage;