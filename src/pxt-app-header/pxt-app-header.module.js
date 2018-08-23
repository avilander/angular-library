import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "../modules/angular-material.module";
import { PxtAppHeaderComponent } from "./pxt-app-header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { BrowserModule } from "@angular/platform-browser";
import { MatNativeDateModule } from "@angular/material";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
var PxtAppHeaderModule = /** @class */ (function () {
    function PxtAppHeaderModule() {
    }
    PxtAppHeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule,
                        BrowserModule,
                        BrowserAnimationsModule,
                        LayoutModule,
                        AngularMaterialModule,
                        BrowserModule,
                        BrowserAnimationsModule,
                        FormsModule,
                        HttpClientModule,
                        MatNativeDateModule,
                        ReactiveFormsModule],
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