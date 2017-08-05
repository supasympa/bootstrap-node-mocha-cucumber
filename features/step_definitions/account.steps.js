"use strict";
exports.__esModule = true;
var chai = require("chai");
var cucumber_1 = require("cucumber");
var user_1 = require("../../src/user");
var expect = chai.expect;
exports["default"] = cucumber_1.defineSupportCode(function (_a) {
    var Given = _a.Given, When = _a.When, Then = _a.Then;
    var user = new user_1["default"]();
    Given(/^John has logged in with an id of ([A-Z|0-9]+)$/, function (id) {
        user.login(id);
    });
    When(/^he gets his account details$/, function () {
        user.getAccount();
    });
    Then(/^he should receive his account details with a valuation of ([0-1]+)$/, function (value) {
        expect(user.id).to.equal("JOHN0001");
        expect(user.valuation).to.equal(parseInt(value, 10));
    });
    Given(/^Jane has logged in with an id of ([A-Z|0-9]+)$/, function (id) {
        user.login(id);
    });
    When(/^she gets his account details$/, function () {
        user.getAccount();
    });
    Then("she should receive her account details with a valuation of {value}", function (value) {
        expect(user.id).to.equal("JANE0002");
        expect(user.valuation).to.equal(parseInt(value, 10));
    });
});
