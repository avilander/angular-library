(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/material'), require('@angular/cdk/layout'), require('@angular/material/toolbar'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/material', '@angular/cdk/layout', '@angular/material/toolbar', '@angular/common'], factory) :
    (factory((global['angular-library'] = {}),global.ng.core,null,null,null,null,null,null));
}(this, (function (exports,core,platformBrowser,animations,material,layout,toolbar,common) { 'use strict';

    var AppComponent = /** @class */ (function () {
        function AppComponent() {
            this.title = 'al';
        }
        AppComponent.decorators = [
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [
                            AppComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            animations.BrowserAnimationsModule,
                            layout.LayoutModule,
                            material.MatToolbarModule,
                            material.MatButtonModule,
                            material.MatSidenavModule,
                            material.MatIconModule,
                            material.MatListModule,
                            material.MatCardModule
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
            { type: core.Component, args: [{
                        selector: 'pxt-header',
                        templateUrl: './pxt-app-header.component.html',
                        styleUrls: ['./pxt-app-header.component.css']
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule,
                            platformBrowser.BrowserModule,
                            animations.BrowserAnimationsModule,
                            layout.LayoutModule,
                            toolbar.MatToolbarModule,
                            material.MatButtonModule,
                            material.MatSidenavModule,
                            material.MatIconModule,
                            material.MatListModule,
                            material.MatCardModule],
                        declarations: [PxtAppHeaderComponent],
                        exports: [PxtAppHeaderComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA, core.NO_ERRORS_SCHEMA],
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
