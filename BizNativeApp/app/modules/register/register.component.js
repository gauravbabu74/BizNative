"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var observable_1 = require("data/observable");
var angular_1 = require("nativescript-telerik-ui-pro/sidedrawer/angular");
var RegisterComponent = (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent(page, _changeDetectionRef) {
        _super.call(this);
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
    }
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.set("mainContentText", "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
            + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.");
    };
    RegisterComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], RegisterComponent.prototype, "drawerComponent", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-register",
            templateUrl: "register.component.html",
            styleUrls: ["register.component.css"]
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [page_1.Page, core_1.ChangeDetectorRef])
    ], RegisterComponent);
    return RegisterComponent;
}(observable_1.Observable));
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map