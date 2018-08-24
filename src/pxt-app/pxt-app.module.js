import { AngularMaterialModule } from "../modules/angular-material.module";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { PxtAppComponent } from './pxt-app.component';
import { PxtAppHeaderModule } from '../pxt-app-header/pxt-app-header.module';
var PxtAppModule = /** @class */ (function () {
    function PxtAppModule() {
    }
    PxtAppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        AngularMaterialModule,
                        PxtAppHeaderModule
                    ],
                    declarations: [PxtAppComponent],
                    exports: [PxtAppComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
                    providers: [],
                    bootstrap: [PxtAppComponent]
                },] },
    ];
    return PxtAppModule;
}());
export { PxtAppModule };
//# sourceMappingURL=pxt-app.module.js.map