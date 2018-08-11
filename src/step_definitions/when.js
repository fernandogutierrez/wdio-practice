const { When } = require('cucumber');
import contactPage from '../pageobjects/contact_page';
import registrationPage from '../pageobjects/registration_page';


When(/^I insert '(.*)'$/, function (name) {
   contactPage.setName(name)
});

When(/^I insert an invalid email$/, function () {
   contactPage.setEmail('somerandomtext')
});

When(/^I press on send$/, function () {
    contactPage.submitForm();
});

When(/^I insert '(.*)' in first name field$/, function (fName) {
    registrationPage.setFirstName(fName);

});

When(/^I insert '(.*)' in last name field$/, function (lName) {
    registrationPage.setLastName(lName);
});

When(/^I set marital status as '(single|married)'$/, function (mStatus) {
    registrationPage.setMaritalStatus(mStatus);
});

When(/^I set the hobby as '(reading|dance|cricket)'$/, function (hobby) {
    registrationPage.setHobby(hobby);
});

When(/^I set the country as '(.*)'$/, function (country) {
    registrationPage.selectCountry(country);
});

When(/^I set the date of birth as '(.*)'$/, function (date) {
    let dateOfBirth = date.split('/');
    registrationPage.setDateOfBirth(dateOfBirth[0], dateOfBirth[1], dateOfBirth[2]);
});

When(/^I insert '(.*)' in phone number field$/, function (pNumber) {
    // include countryt code 10 digits
    registrationPage.setPhoneNumber(pNumber);
});

When(/^I insert '(.*)' in username field$/, function (username) {
    registrationPage.setUsername(username);
});

When(/^I insert '(.*)' in email field$/, function (email) {
    registrationPage.setEmail(email);
});

When(/^I insert '(.*)' in password field$/, function (password) {
    registrationPage.setPassword(password);
});

When(/^I retype '(.*)' in confirm password field$/, function (confPassword) {
    registrationPage.setConfirmPassword(confPassword);
});

When(/^I click on submit button$/, function () {
    registrationPage.submitForm();
});