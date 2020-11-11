import {Selector} from 'testcafe';

const developerName = Selector('#developer-name');
const osOption = Selector('#macos');
const submitButton = Selector('#submit-button');


fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    const developernameElement = await developerName.with({
        visibilityCheck: true
    })();
    await t
        .expect(developerName.value).eql('', 'input is empty')
        .typeText(developerName, 'Martin')
        .expect(developerName.value).eql('Martin','input contains "Martin"')
        .click(osOption)
        .click(submitButton);

});
