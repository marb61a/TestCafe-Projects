import { Selector } from 'testcafe';

const fileUpload = Selector('input#file-upload');
const uploadFileButton = Selector('input#file-submit.button');

fixture("File Upload Fixture")
    .page("https://the-internet.herokuapp.com/upload");

test("File Upload Test", async t => {
    await t
        .setFilesToUpload(fileUpload, '../upload/image1.PNG')
        .clearUpload(fileUpload)
        .setFilesToUpload(fileUpload,'../upload/image1.PNG')
        .click(uploadFileButton);

});
