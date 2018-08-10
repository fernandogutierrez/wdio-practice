const { Given } = require('cucumber');
import topMenu from '../pageobjects/top_menu.js';

Given(/^I open '(.*)'$/, function (url_site) {
    browser.url(url_site);
});

Given(/^I go to Contact page$/, function () {
    topMenu.goToContact();
});

Given(/^I go to Registration page$/, function () {

});
