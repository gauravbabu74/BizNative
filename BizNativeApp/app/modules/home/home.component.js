"use strict";
var core_1 = require("@angular/core");
var frameModule = require("ui/frame");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.login = function () {
        alert("Login Call");
    };
    HomeComponent.prototype.forgotPass = function () {
        prompt({ title: "Forgot Password", message: "Enter the email address you used to register for Groceries to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                alert("Forgot Password");
            }
        });
    };
    HomeComponent.prototype.registerPage = function () {
        var topmost = frameModule.topmost();
        topmost.navigate("register");
    };
    HomeComponent.prototype.testcall = function () {
        alert("sfsfsf");
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-home",
            templateUrl: "home.component.html",
            styleUrls: ["home.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map