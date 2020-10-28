import {Selector} from 'testcafe';

const developerName = Selector('#developer-name');
const osOption = Selector('#macos');
const submitButton = Selector('#submit-button');

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/")

test.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t => {
    await t
        .typeText(developerName, "Martin")
        .click(osOption)
        .click(submitButton);

});
