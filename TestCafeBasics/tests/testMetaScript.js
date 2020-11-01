import {Selector} from 'testcafe';

const developerName = Selector('#developer-name');
const osOption = Selector('#macos');
const submitButton = Selector('#submit-button');

fixture.meta('version ', '1')("First Fixture")
    .page("http://devexpress.github.io/testcafe/");

test.meta('env','production')
    .page("https://devexpress.github.io/testcafe/example/")
("First Test", async t => {
    await t
        .typeText(developerName, "Martin")
        .click(osOption)
        .click(submitButton);

});

test.page("https://devexpress.github.io/testcafe/example/")
("Second Test", async t => {
    await t
        .typeText("#developer-name", "Martin")
        .click("#windows")
        .click("#submit-button")

});