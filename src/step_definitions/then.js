const { Then } = require('cucumber');
import contactPage from '../pageobjects/contact_page';

Then(/^I see '(.*)' displayed below (email|name) field$/, function (alert, input) {
    if(input === 'email'){
        expect(contactPage.isTextVisible(alert, 'Your Email (required)')).to.be.true;
    }
    else if(input === 'name'){
        expect(contactPage.isTextVisible(alert, 'Your Name (required)')).to.be.true;
    }
});

Then(/^I see the confirmation dialog openned$/, function () {

});
