import {Selector} from 'testcafe';

const interfaceSelect = Selector('select#preferred-interface');
const interfaceOptions = interfaceSelect.find('option');
