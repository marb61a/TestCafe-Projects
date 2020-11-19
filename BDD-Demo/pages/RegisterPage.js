const {Selector} = require('testcafe');

function select(selector){
    return Selector(selector).with({
        boundTestRun: testController
    });
}

exports.RegisterPage = {
    GenderButton: function(){
        return('#gender-male');
    },
    FirstName: function(){
        return('input#FirstName');
    },
    LastName: function(){
        return select('#LastName');
    },
    DateOfBirth : function(){
        return select("select[name='DateOfBirthDay']");
    },
    
}
