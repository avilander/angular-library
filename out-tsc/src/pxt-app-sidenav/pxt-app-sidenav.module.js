"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pxt_app_sidenav_component_1 = require("./pxt-app-sidenav.component");
var angular_material_module_1 = require("../modules/angular-material.module");
var PxtAppSidenavModule = /** @class */ (function () {
    function PxtAppSidenavModule() {
    }
    PxtAppSidenavModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [angular_material_module_1.AngularMaterialModule],
                    declarations: [pxt_app_sidenav_component_1.PxtAppSidenavComponent],
                    exports: [pxt_app_sidenav_component_1.PxtAppSidenavComponent],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA],
                    providers: [],
                    bootstrap: [pxt_app_sidenav_component_1.PxtAppSidenavComponent]
                },] },
    ];
    return PxtAppSidenavModule;
}());
exports.PxtAppSidenavModule = PxtAppSidenavModule;
//# sourceMappingURL=pxt-app-sidenav.module.js.map