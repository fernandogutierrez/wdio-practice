const { When } = require('cucumber');
import contactPage from '../pageobjects/contact_page';


When(/^I insert '(.*)'$/, function (name) {
   contactPage.setName(name)
});

When(/^I insert an invalid email$/, function () {
   contactPage.setEmail('somerandomtext')
});

When(/^I press on send$/, function () {
    contactPage.submitForm();
});