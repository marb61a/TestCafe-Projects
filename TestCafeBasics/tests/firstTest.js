fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/")

test("First Test", async t => {
    await t
        .typeText("#developer-name", "Martin")
        .click("#windows")
        .click("#submit-button")

});