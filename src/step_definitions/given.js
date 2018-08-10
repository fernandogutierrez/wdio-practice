const { Given } = require('cucumber');
import topMenu from '../pageobjects/topmenu.js';

Given(/^I open '(.*)'$/, function (url_site) {
    browser.url(url_site);
});

Given(/^I go to Contact page$/, function () {
    topMenu.go_to_contact();
});