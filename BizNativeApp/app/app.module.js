"use strict";
var angular_1 = require("nativescript-telerik-ui-pro/sidedrawer/angular");
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var home_module_1 = require("./modules/home/home.module");
var register_module_1 = require("./modules/register/register.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routes_1.appRoutes),
                home_module_1.HomeModule,
                register_module_1.RegisterModule
            ],
            declarations: [app_component_1.AppComponent, angular_1.SIDEDRAWER_DIRECTIVES],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map