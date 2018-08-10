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

When('I insert {string} in first name field', function (string) {

});

When('I insert {string} in last name field', function (string) {

});

When('I set marital status as {string}', function (string) {

});

When('I set the hobby as {string}', function (string) {

});

When('I set the country as {string}', function (string) {
    
});

When('I set the date of birth as {string}', function (string) {

});

When('I insert {string} in phone number field', function (string) {

});

When('I insert {string} in username field', function (string) {

});

When('I insert {string} in email field', function (string) {

});

When('I insert {string} in password field', function (string) {

});

When('I retype {string} in confirm password field', function (string) {

});

When('I click on submit button', function () {

});