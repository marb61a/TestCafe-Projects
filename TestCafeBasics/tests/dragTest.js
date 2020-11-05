import { Selector } from 'testcafe';

const triedCheckbox = Selector('label').withText("I have tried TestCafe");
const slider = Selector('#slider'); 

fixture ('Drag Test')
    .page('https://devexpress.github.io/testcafe/example/');
