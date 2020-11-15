import {Selector} from 'testcafe';

const developerName = Selector('#developer-name');
const osOption = Selector('#macos');
const submitButton = Selector('#submit-button');

fixture("First Fixture")
    .page("http://devexpress.github.io/testcafe/")
    .beforeEach(async t => {
        await t 
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0);
    });

test
    .page("https://devexpress.github.io/testcafe/example/")
    ("First Test", async t =>{
        await t
            .typeText("#developer-name","Martin")
            .click("#macos")
            .click("#submit-button")
            .takeScreenshot();
    });
    
test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Second Test", async t =>{
        await t
            .typeText("#developer-name","Martin")
            .click("#macos")
            .takeScreenshot()
            .click("#submit-button");
    });
    
test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Third Test", async t =>{
        await t
            .typeText("#developer-name","Martin")
            .click("#macos")
            .click("#submit-button")
            .takeScreenshot();
    });
