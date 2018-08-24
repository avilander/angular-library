"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_material_module_1 = require("../modules/angular-material.module");
var core_1 = require("@angular/core");
var pxt_app_component_1 = require("./pxt-app.component");
var pxt_app_header_module_1 = require("../pxt-app-header/pxt-app-header.module");
var PxtAppModule = /** @class */ (function () {
    function PxtAppModule() {
    }
    PxtAppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        angular_material_module_1.AngularMaterialModule,
                        pxt_app_header_module_1.PxtAppHeaderModule
                    ],
                    declarations: [pxt_app_component_1.PxtAppComponent],
                    exports: [pxt_app_component_1.PxtAppComponent],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA],
                    providers: [],
                    bootstrap: [pxt_app_component_1.PxtAppComponent]
                },] },
    ];
    return PxtAppModule;
}());
exports.PxtAppModule = PxtAppModule;
//# sourceMappingURL=pxt-app.module.js.map