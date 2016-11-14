"use strict";
var core_1 = require("@angular/core");
var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.registerSubmit = function () {
        alert("registerSubmit Call");
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-register",
            templateUrl: "register.component.html",
            styleUrls: ["register.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map