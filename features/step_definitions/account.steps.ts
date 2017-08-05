import * as chai from "chai";
import { defineSupportCode } from "cucumber";

import User from "../../src/user";

const expect = chai.expect;

export default defineSupportCode(function({Given, When, Then}) {

    const user: User = new User();

    Given(/^John has logged in with an id of ([A-Z|0-9]+)$/, (id: string) => {
        user.login(id);
    });

    When(/^he gets his account details$/, () => {
        user.getAccount();
    });

    Then(/^he should receive his account details with a valuation of ([0-1]+)$/, (value: string) => {
        expect(user.id).to.equal("JOHN0001");
        expect(user.valuation).to.equal(parseInt(value, 10));
    });

    Given(/^Jane has logged in with an id of ([A-Z|0-9]+)$/, (id: string) => {
        user.login(id);
    });

    When(/^she gets his account details$/, () => {
        user.getAccount();
    });

    Then("she should receive her account details with a valuation of {value}", (value: string) => {
        expect(user.id).to.equal("JANE0002");
        expect(user.valuation).to.equal(parseInt(value, 10));
    });

});
