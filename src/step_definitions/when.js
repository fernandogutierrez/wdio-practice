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

When(/^I insert '(.*)' in first name field$/, function (string) {

});

When(/^I insert '(.*)' in last name field$/, function (string) {

});

When(/^I set marital status as '(Single|Married)'$/, function (string) {

});

When(/^I set the hobby as '(Reading|Dance|Cricket)'$/, function (string) {

});

When(/^I set the country as '(.*)'$/, function (string) {

});

When(/^I set the date of birth as '(.*)'$/, function (string) {

});

When(/^I insert '[0-9]{7}' in phone number field$/, function (string) {

});

When(/^I insert '(.*)' in username field$/, function (string) {

});

When(/^I insert '(.*)' in email field$/, function (string) {

});

When(/^I insert '(.*)' in password field$/, function (string) {

});

When(/^I retype '(.*)' in confirm password field$/, function (string) {

});

When(/^I click on submit button$/, function () {

});