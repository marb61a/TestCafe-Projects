const fs = require('fs');
const createTestCafe = require('testcafe');
const testControllerHolder = require('../support/testControllerHolder');
const {AfterAll, setDefaultTimeout, Before, After, Status} = require('cucumber');
const errorHandling = require('../support/errorHandling');
const TIMEOUT = 20000;

let isTestCafeError = false;
let attachScreenshotToReport = null;
let cafeRunner = null;
let n = 0;

function createTestFile(){
    fs.writeFileSync("test.js",
        'import errorHandling from "./features/support/errorHandling.js";\n' +
        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

        'fixture("fixture")\n' +

        'test\n' +
        '("test", testControllerHolder.capture)'
    );
}

function runTest(iteration, browser){
    createTestCafe("localhost", 1338 + iteration, 1339 + iteration)
        .then(function(tc){
            cafeRunner = tc;
            const runner = tc.createRunner();
            return runner
                .src("./testjs")
                .screenshots("reports/screenshots/", true)
                .browsers(browser)
                .run()
                .catch(function(error){
                    console.error(error);
                })
        })
        .then(function(report){

        });
}

setDefaultTimeout(TIMEOUT);

Before(function(){

});
