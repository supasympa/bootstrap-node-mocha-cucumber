"use strict";
exports.__esModule = true;
var User = (function () {
    function User() {
        this.id = "";
        this.valuation = 0;
    }
    User.prototype.login = function (id) {
        this.id = id;
    };
    User.prototype.getAccount = function () {
        switch (this.id) {
            case "JANE0002":
                this.valuation = 2000;
                break;
            default:
                this.valuation = 1000;
        }
    };
    return User;
}());
exports["default"] = User;
