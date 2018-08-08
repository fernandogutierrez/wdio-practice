const { Given } = require('cucumber');
const topMenu = require('../pageobjects/topmenu');

Given(/^I open '(.*)'$/, function (url_site) {
    browser.url(url_site);
});

Given(/^I go to Contact page$/, function () {
    topMenu.go_to_contact();
});