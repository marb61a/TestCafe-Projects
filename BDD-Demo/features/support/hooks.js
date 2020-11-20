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

}
