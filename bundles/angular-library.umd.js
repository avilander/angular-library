(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/platform-browser/animations'), require('@angular/material'), require('@angular/cdk/layout'), require('@angular/material/toolbar'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/platform-browser', '@angular/core', '@angular/platform-browser/animations', '@angular/material', '@angular/cdk/layout', '@angular/material/toolbar', '@angular/common'], factory) :
    (factory((global['angular-library'] = global['angular-library'] || {}),global._angular_platformBrowser,global.ng.core,global._angular_platformBrowser_animations,global._angular_material,global._angular_cdk_layout,global._angular_material_toolbar,global._angular_common));
}(this, (function (exports,_angular_platformBrowser,_angular_core,_angular_platformBrowser_animations,_angular_material,_angular_cdk_layout,_angular_material_toolbar,_angular_common) { 'use strict';

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'al';
    }
    AppComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'al-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css']
                },] },
    ];
    return AppComponent;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [
                        AppComponent
                    ],
                    imports: [
                        _angular_platformBrowser.BrowserModule,
                        _angular_platformBrowser_animations.BrowserAnimationsModule,
                        _angular_cdk_layout.LayoutModule,
                        _angular_material.MatToolbarModule,
                        _angular_material.MatButtonModule,
                        _angular_material.MatSidenavModule,
                        _angular_material.MatIconModule,
                        _angular_material.MatListModule,
                        _angular_material.MatCardModule
                    ],
                    providers: [],
                    bootstrap: [AppComponent]
                },] },
    ];
    return AppModule;
}());

var PxtAppHeaderComponent = /** @class */ (function () {
    function PxtAppHeaderComponent() {
    }
    PxtAppHeaderComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'pxt-header',
                    styles: [''],
                    template: "<mat-toolbar color=\"primary\">\n        <span>Peixoto NavBar.</span>\n        <!-- This fills the remaining space of the current row -->\n        <span class=\"example-fill-remaining-space\"></span>\n        <span></span>\n    </mat-toolbar>"
                },] },
    ];
    /** @nocollapse */
    PxtAppHeaderComponent.ctorParameters = function () { return []; };
    return PxtAppHeaderComponent;
}());

var PxtAppHeaderModule = /** @class */ (function () {
    function PxtAppHeaderModule() {
    }
    PxtAppHeaderModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [_angular_common.CommonModule,
                        _angular_platformBrowser.BrowserModule,
                        _angular_platformBrowser_animations.BrowserAnimationsModule,
                        _angular_cdk_layout.LayoutModule,
                        _angular_material_toolbar.MatToolbarModule,
                        _angular_material.MatButtonModule,
                        _angular_material.MatSidenavModule,
                        _angular_material.MatIconModule,
                        _angular_material.MatListModule,
                        _angular_material.MatCardModule],
                    declarations: [PxtAppHeaderComponent],
                    exports: [PxtAppHeaderComponent],
                    schemas: [_angular_core.CUSTOM_ELEMENTS_SCHEMA, _angular_core.NO_ERRORS_SCHEMA],
                    providers: [],
                    bootstrap: [PxtAppHeaderComponent]
                },] },
    ];
    return PxtAppHeaderModule;
}());

/**
 * @module
 * @description
 * Entry point for all public APIs of the async local storage package.
 */

exports.AppModule = AppModule;
exports.AppComponent = AppComponent;
exports.PxtAppHeaderModule = PxtAppHeaderModule;
exports.PxtAppHeaderComponent = PxtAppHeaderComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
