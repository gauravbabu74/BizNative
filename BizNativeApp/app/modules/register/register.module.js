"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var register_routes_1 = require("./register.routes");
var register_component_1 = require("./register.component");
var RegisterModule = (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                register_routes_1.registerRouting
            ],
            declarations: [
                register_component_1.RegisterComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterModule);
    return RegisterModule;
}());
exports.RegisterModule = RegisterModule;
//# sourceMappingURL=register.module.js.map