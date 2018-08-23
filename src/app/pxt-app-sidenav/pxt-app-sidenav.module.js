import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from "@angular/material";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { PxtAppSidenavComponent } from './pxt-app-sidenav.component';
var PxtAppSidenavModule = /** @class */ (function () {
    function PxtAppSidenavModule() {
    }
    PxtAppSidenavModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule,
                        BrowserModule,
                        BrowserAnimationsModule,
                        LayoutModule,
                        MatToolbarModule,
                        MatButtonModule,
                        MatSidenavModule,
                        MatIconModule,
                        MatListModule,
                        MatCardModule],
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