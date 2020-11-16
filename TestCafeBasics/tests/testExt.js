fixture("My Fixture")
    .page("http://www.google.com");

test("My Test", async (t) => {
    await t
    await t // select the last option and press tab
        .setTestSpeed(0.7)
        .hover(select)
        .expect(select.hasAttribute("disabled")).notOk({timeout: 5000})
        .click(select)
        .click(select
            .find("option")
            .nth(-1))
        .pressKey("tab"); 
});
