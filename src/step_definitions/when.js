const { When } = require('cucumber');
const contactPage = require('../pageobjects/contact');

When(/^I insert '(.*)'$/, function (name) {
   contactPage.set_name(name)
});

When(/^I insert an invalid email$/, function () {
   contactPage.set_email('somerandomtext')
});

When(/^I press on Send$/, function () {
    contactPage.submit_form();
});