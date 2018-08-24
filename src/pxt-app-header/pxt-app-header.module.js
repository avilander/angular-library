import { AngularMaterialModule } from "../modules/angular-material.module";
import { PxtAppHeaderComponent } from "./pxt-app-header.component";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
var PxtAppHeaderModule = /** @class */ (function () {
    function PxtAppHeaderModule() {
    }
    PxtAppHeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        AngularMaterialModule,
                    ],
                    declarations: [PxtAppHeaderComponent],
                    exports: [PxtAppHeaderComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
                    providers: [],
                    bootstrap: [PxtAppHeaderComponent]
                },] },
    ];
    return PxtAppHeaderModule;
}());
export { PxtAppHeaderModule };
//# sourceMappingURL=pxt-app-header.module.js.map