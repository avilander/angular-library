import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { PxtAppSidenavComponent } from './pxt-app-sidenav.component';
import { AngularMaterialModule } from '../modules/angular-material.module';
var PxtAppSidenavModule = /** @class */ (function () {
    function PxtAppSidenavModule() {
    }
    PxtAppSidenavModule.decorators = [
        { type: NgModule, args: [{
                    imports: [AngularMaterialModule],
                    declarations: [PxtAppSidenavComponent],
                    exports: [PxtAppSidenavComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
                    providers: [],
                    bootstrap: [PxtAppSidenavComponent]
                },] },
    ];
    return PxtAppSidenavModule;
}());
export { PxtAppSidenavModule };
//# sourceMappingURL=pxt-app-sidenav.module.js.map