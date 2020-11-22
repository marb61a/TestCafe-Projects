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

    this.setBrowser = function(){
        if(parameters.browser === undefined){
            return 'chrome';
        } else {
            return parameters.browser;
        }

    },

    this.addScreenshotToReport = function(){
        if (process.argv.includes('--format') || process.argv.includes('-f') || process.argv.includes('--format-options')){
            testController.takeScreenshot()
                .then(function(screenshotPath){

                })
                .catch(function(error){
                    console.warn('The screenshot was not attached to the report');
                });

        } else {

        }

    }

}

setWorldConstructor(CustomWorld);