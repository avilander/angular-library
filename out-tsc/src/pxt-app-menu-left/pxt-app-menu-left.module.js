"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_material_module_1 = require("../modules/angular-material.module");
var core_1 = require("@angular/core");
var pxt_app_menu_left_component_1 = require("./pxt-app-menu-left.component");
var PxtAppMenuLeftModule = /** @class */ (function () {
    function PxtAppMenuLeftModule() {
    }
    PxtAppMenuLeftModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        angular_material_module_1.AngularMaterialModule,
                    ],
                    declarations: [pxt_app_menu_left_component_1.PxtAppMenuLeftComponent],
                    exports: [pxt_app_menu_left_component_1.PxtAppMenuLeftComponent],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA],
                    providers: [],
                    bootstrap: [pxt_app_menu_left_component_1.PxtAppMenuLeftComponent]
                },] },
    ];
    return PxtAppMenuLeftModule;
}());
exports.PxtAppMenuLeftModule = PxtAppMenuLeftModule;
//# sourceMappingURL=pxt-app-menu-left.module.js.map