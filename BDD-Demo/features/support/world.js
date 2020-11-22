const {setWorldConstructor} = require('cucumber');
const base64Img = require('base64-img');

const testControllerHolder = require('./testControllerHolder');
const { testController } = require('./testControllerHolder');

function CustomWorld({ attach, parameters }){
    this.waitForTestController = testControllerHolder.get()
        .then(function(tc){
            return testController = tc;
        });
    this.attach = attach;
}

setWorldConstructor(CustomWorld);