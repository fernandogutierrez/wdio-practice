const { Then } = require('cucumber');
const contactPage = require('../pageobjects/contact');


Then(/^I see '(.*)' displayed below (email|name) field$/, function (alert, input) {
    expect(contactPage.is_text_visible('Your Email (required)', alert)).to.be.true;
});
