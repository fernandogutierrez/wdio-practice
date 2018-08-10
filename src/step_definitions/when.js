const { When } = require('cucumber');
import contactPage from '../pageobjects/contact_page';


When(/^I insert '(.*)'$/, function (name) {
   contactPage.set_name(name)
});

When(/^I insert an invalid email$/, function () {
   contactPage.set_email('somerandomtext')
});

When(/^I press on send$/, function () {
    contactPage.submit_form();
});