import {Selector} from 'testcafe';

const iframe =  Selector('iframe#mce_0_ifr');
const textArea = Selector('body#tinymce.mce-content-body');

fixture("Iframe Fixture")
    .page("https://the-internet.herokuapp.com/iframe")
