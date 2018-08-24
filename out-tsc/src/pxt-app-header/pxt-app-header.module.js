"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_material_module_1 = require("../modules/angular-material.module");
var pxt_app_header_component_1 = require("./pxt-app-header.component");
var core_1 = require("@angular/core");
var PxtAppHeaderModule = /** @class */ (function () {
    function PxtAppHeaderModule() {
    }
    PxtAppHeaderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        angular_material_module_1.AngularMaterialModule,
                    ],
                    declarations: [pxt_app_header_component_1.PxtAppHeaderComponent],
                    exports: [pxt_app_header_component_1.PxtAppHeaderComponent],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA],
                    providers: [],
                    bootstrap: [pxt_app_header_component_1.PxtAppHeaderComponent]
                },] },
    ];
    return PxtAppHeaderModule;
}());
exports.PxtAppHeaderModule = PxtAppHeaderModule;
//# sourceMappingURL=pxt-app-header.module.js.map