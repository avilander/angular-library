import { AngularMaterialModule } from "../modules/angular-material.module";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { PxtAppMenuLeftComponent } from './pxt-app-menu-left.component';
var PxtAppMenuLeftModule = /** @class */ (function () {
    function PxtAppMenuLeftModule() {
    }
    PxtAppMenuLeftModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        AngularMaterialModule,
                    ],
                    declarations: [PxtAppMenuLeftComponent],
                    exports: [PxtAppMenuLeftComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
                    providers: [],
                    bootstrap: [PxtAppMenuLeftComponent]
                },] },
    ];
    return PxtAppMenuLeftModule;
}());
export { PxtAppMenuLeftModule };
//# sourceMappingURL=pxt-app-menu-left.module.js.map