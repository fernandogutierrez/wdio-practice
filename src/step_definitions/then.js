const { Then } = require('cucumber');
const contactPage = require('../pageobjects/contact');


Then(/^I see '(.*)' displayed below email field$/, function (alert) {
    expect(contactPage.is_text_visible('Your Email (required)', alert)).to.be.true;
});
