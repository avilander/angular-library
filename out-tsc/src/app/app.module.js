"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var layout_1 = require("@angular/cdk/layout");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        animations_1.BrowserAnimationsModule,
                        layout_1.LayoutModule,
                        material_1.MatToolbarModule,
                        material_1.MatButtonModule,
                        material_1.MatSidenavModule,
                        material_1.MatIconModule,
                        material_1.MatListModule,
                        material_1.MatCardModule
                    ],
                    providers: [],
                    bootstrap: [app_component_1.AppComponent]
                },] },
    ];
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map