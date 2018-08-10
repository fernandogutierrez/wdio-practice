const { Then } = require('cucumber');
import contactPage from '../pageobjects/contact';

Then(/^I see '(.*)' displayed below (email|name) field$/, function (alert, input) {
    if(input === 'email'){
        expect(contactPage.is_text_visible(alert, 'Your Email (required)')).to.be.true;
    }
    else if(input === 'name'){
        expect(contactPage.is_text_visible(alert, 'Your Name (required)')).to.be.true;
    }
});
