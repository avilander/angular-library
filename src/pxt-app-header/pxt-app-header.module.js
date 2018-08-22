import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from "@angular/common";
import { PxtAppHeaderComponent } from "./pxt-app-header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from "@angular/material";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
var PxtAppHeaderModule = /** @class */ (function () {
    function PxtAppHeaderModule() {
    }
    PxtAppHeaderModule.decorators = [
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