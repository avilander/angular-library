(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/material'), require('@angular/cdk/layout')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/material', '@angular/cdk/layout'], factory) :
    (factory((global['angular-library'] = {}),global.ng.core,null,null,null,null));
}(this, (function (exports,core,platformBrowser,animations,material,layout) { 'use strict';

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

    /**
     * @module
     * @description
     * Entry point for all public APIs of the async local storage package.
     */

    exports.AppModule = AppModule;
    exports.AppComponent = AppComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
