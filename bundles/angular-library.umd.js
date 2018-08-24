(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/platform-browser/animations'), require('@angular/material'), require('@angular/cdk/layout'), require('core-js/es7/reflect'), require('zone.js/dist/zone'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/common/http'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/platform-browser', '@angular/core', '@angular/platform-browser/animations', '@angular/material', '@angular/cdk/layout', 'core-js/es7/reflect', 'zone.js/dist/zone', '@angular/cdk/table', '@angular/cdk/tree', '@angular/common/http', '@angular/forms', '@angular/common'], factory) :
    (factory((global['angular-library'] = global['angular-library'] || {}),global._angular_platformBrowser,global.ng.core,global._angular_platformBrowser_animations,global._angular_material,global._angular_cdk_layout,global.coreJs_es7_reflect,global.zone_js_dist_zone,global._angular_cdk_table,global._angular_cdk_tree,global._angular_common_http,global._angular_forms,global._angular_common));
}(this, (function (exports,_angular_platformBrowser,_angular_core,_angular_platformBrowser_animations,_angular_material,_angular_cdk_layout,coreJs_es7_reflect,zone_js_dist_zone,_angular_cdk_table,_angular_cdk_tree,_angular_common_http,_angular_forms,_angular_common) { 'use strict';

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

/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */

var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    exports: [
                        _angular_cdk_table.CdkTableModule,
                        _angular_cdk_tree.CdkTreeModule,
                        _angular_material.MatAutocompleteModule,
                        _angular_material.MatBadgeModule,
                        _angular_material.MatBottomSheetModule,
                        _angular_material.MatButtonModule,
                        _angular_material.MatButtonToggleModule,
                        _angular_material.MatCardModule,
                        _angular_material.MatCheckboxModule,
                        _angular_material.MatChipsModule,
                        _angular_material.MatStepperModule,
                        _angular_material.MatDatepickerModule,
                        _angular_material.MatDialogModule,
                        _angular_material.MatDividerModule,
                        _angular_material.MatExpansionModule,
                        _angular_material.MatGridListModule,
                        _angular_material.MatIconModule,
                        _angular_material.MatInputModule,
                        _angular_material.MatListModule,
                        _angular_material.MatMenuModule,
                        _angular_material.MatNativeDateModule,
                        _angular_material.MatPaginatorModule,
                        _angular_material.MatProgressBarModule,
                        _angular_material.MatProgressSpinnerModule,
                        _angular_material.MatRadioModule,
                        _angular_material.MatRippleModule,
                        _angular_material.MatSelectModule,
                        _angular_material.MatSidenavModule,
                        _angular_material.MatSliderModule,
                        _angular_material.MatSlideToggleModule,
                        _angular_material.MatSnackBarModule,
                        _angular_material.MatSortModule,
                        _angular_material.MatTableModule,
                        _angular_material.MatTabsModule,
                        _angular_material.MatToolbarModule,
                        _angular_material.MatTooltipModule,
                        _angular_material.MatTreeModule,
                        _angular_platformBrowser.BrowserModule,
                        _angular_forms.FormsModule,
                        _angular_common_http.HttpClientModule,
                        _angular_material.MatNativeDateModule,
                        _angular_forms.ReactiveFormsModule,
                        _angular_common.CommonModule,
                        _angular_platformBrowser_animations.BrowserAnimationsModule,
                        _angular_cdk_layout.LayoutModule
                    ]
                },] },
    ];
    return AngularMaterialModule;
}());

var PxtAppHeaderComponent = /** @class */ (function () {
    function PxtAppHeaderComponent(changeDetectorRef, media) {
        this.pxtAppTitle = "";
        this.shouldRun = true;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    PxtAppHeaderComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    PxtAppHeaderComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'pxt-header',
                    // templateUrl: './pxt-app-header.component.html',
                    /*
                     template: `<div class="example-container" [class.example-is-mobile]="mobileQuery.matches" *ngIf="shouldRun">
                    <mat-toolbar color="primary" class="example-toolbar">
                      <button mat-icon-button (click)="snav.toggle()"><mat-icon>menu</mat-icon></button>
                      <h1 class="example-app-name">Responsive App</h1>
                    </mat-toolbar>
                   
                    <mat-sidenav-container class="example-sidenav-container"
                                           [style.marginTop.px]="mobileQuery.matches ? 56 : 0">
                      <mat-sidenav #snav [mode]="mobileQuery.matches ? 'over' : 'side'"
                                   [fixedInViewport]="mobileQuery.matches" fixedTopGap="56">
                        <mat-nav-list>
                          <a mat-list-item routerLink="." *ngFor="let nav of fillerNav">{{nav}}</a>
                        </mat-nav-list>
                      </mat-sidenav>
                   
                      <mat-sidenav-content>
                        <p *ngFor="let content of fillerContent">{{content}}</p>
                      </mat-sidenav-content>
                    </mat-sidenav-container>
                   </div>
                   
                   <div *ngIf="!shouldRun">Please open on Stackblitz to see result</div>`,
                   */
                    template: "<mat-toolbar color=\"primary\" class=\"example-toolbar\">\n              <button mat-icon-button><mat-icon>menu</mat-icon></button>\n              <h1 class=\"example-app-name\">{{pxtAppTitle}}</h1>\n            </mat-toolbar>",
                    styles: [".example-is-mobile .example-toolbar {\n              position: fixed;\n              z-index: 2;\n            }\n            h1.example-app-name {\n              margin-left: 8px;\n            }\n            .mat-toolbar.mat-primary {\n              background: #F4511E !important;\n              color: #fff;\n            }"]
                },] },
    ];
    /** @nocollapse */
    PxtAppHeaderComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef },
        { type: _angular_cdk_layout.MediaMatcher }
    ]; };
    PxtAppHeaderComponent.propDecorators = {
        pxtAppTitle: [{ type: _angular_core.Input }]
    };
    return PxtAppHeaderComponent;
}());

var PxtAppHeaderModule = /** @class */ (function () {
    function PxtAppHeaderModule() {
    }
    PxtAppHeaderModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        AngularMaterialModule,
                    ],
                    declarations: [PxtAppHeaderComponent],
                    exports: [PxtAppHeaderComponent],
                    schemas: [_angular_core.CUSTOM_ELEMENTS_SCHEMA, _angular_core.NO_ERRORS_SCHEMA],
                    providers: [],
                    bootstrap: [PxtAppHeaderComponent]
                },] },
    ];
    return PxtAppHeaderModule;
}());

/** @title Responsive sidenav */
var PxtAppSidenavComponent = /** @class */ (function () {
    function PxtAppSidenavComponent(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array.from({ length: 50 }, function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    PxtAppSidenavComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    PxtAppSidenavComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'pxt-sidenav',
                    templateUrl: 'pxt-app-sidenav.component.html',
                    styleUrls: ['pxt-app-sidenav.component.css'],
                },] },
    ];
    /** @nocollapse */
    PxtAppSidenavComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef },
        { type: _angular_cdk_layout.MediaMatcher }
    ]; };
    return PxtAppSidenavComponent;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

var PxtAppSidenavModule = /** @class */ (function () {
    function PxtAppSidenavModule() {
    }
    PxtAppSidenavModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [AngularMaterialModule],
                    declarations: [PxtAppSidenavComponent],
                    exports: [PxtAppSidenavComponent],
                    schemas: [_angular_core.CUSTOM_ELEMENTS_SCHEMA, _angular_core.NO_ERRORS_SCHEMA],
                    providers: [],
                    bootstrap: [PxtAppSidenavComponent]
                },] },
    ];
    return PxtAppSidenavModule;
}());

var PxtAppComponent = /** @class */ (function () {
    function PxtAppComponent(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.shouldRun = true;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.pxtAppTitle = "Title App";
    }
    PxtAppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    PxtAppComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'pxt-app',
                    template: "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\">\n                    <pxt-header [pxtAppTitle]=\"pxtAppTitle\"> </pxt-header>\n                </div>\n                <div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container {\n              display: flex;\n              flex-direction: column;\n              position: absolute;\n              top: 0;\n              bottom: 0;\n              left: 0;\n              right: 0;\n            }"]
                },] },
    ];
    /** @nocollapse */
    PxtAppComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef },
        { type: _angular_cdk_layout.MediaMatcher }
    ]; };
    return PxtAppComponent;
}());

var PxtAppModule = /** @class */ (function () {
    function PxtAppModule() {
    }
    PxtAppModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        AngularMaterialModule,
                        PxtAppHeaderModule
                    ],
                    declarations: [PxtAppComponent],
                    exports: [PxtAppComponent],
                    schemas: [_angular_core.CUSTOM_ELEMENTS_SCHEMA, _angular_core.NO_ERRORS_SCHEMA],
                    providers: [],
                    bootstrap: [PxtAppComponent]
                },] },
    ];
    return PxtAppModule;
}());

var PxtAppMenuLeftComponent = /** @class */ (function () {
    function PxtAppMenuLeftComponent(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array.from({ length: 50 }, function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.shouldRun = true;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    PxtAppMenuLeftComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    PxtAppMenuLeftComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'pxt-header',
                    // templateUrl: './pxt-app-header.component.html',
                    template: " <mat-sidenav-container class=\"example-sidenav-container\"\n                    [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                  [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                <mat-nav-list>\n                    <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a>\n                </mat-nav-list>\n                </mat-sidenav>\n  \n     <mat-sidenav-content>\n       <p *ngFor=\"let content of fillerContent\">{{content}}</p>\n     </mat-sidenav-content>\n   </mat-sidenav-container>",
                    styles: [".example-container {\n                display: flex;\n                flex-direction: column;\n                position: absolute;\n                top: 0;\n                bottom: 0;\n                left: 0;\n                right: 0;\n              }\n              .example-is-mobile .example-toolbar {\n                position: fixed;\n                z-index: 2;\n              }\n              h1.example-app-name {\n                margin-left: 8px;\n              }\n              .example-sidenav-container {\n                flex: 1;\n              }\n              .example-is-mobile .example-sidenav-container {\n                flex: 1 0 auto;\n              }"]
                },] },
    ];
    /** @nocollapse */
    PxtAppMenuLeftComponent.ctorParameters = function () { return [
        { type: _angular_core.ChangeDetectorRef },
        { type: _angular_cdk_layout.MediaMatcher }
    ]; };
    return PxtAppMenuLeftComponent;
}());

var PxtAppMenuLeftModule = /** @class */ (function () {
    function PxtAppMenuLeftModule() {
    }
    PxtAppMenuLeftModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [
                        AngularMaterialModule,
                    ],
                    declarations: [PxtAppMenuLeftComponent],
                    exports: [PxtAppMenuLeftComponent],
                    schemas: [_angular_core.CUSTOM_ELEMENTS_SCHEMA, _angular_core.NO_ERRORS_SCHEMA],
                    providers: [],
                    bootstrap: [PxtAppMenuLeftComponent]
                },] },
    ];
    return PxtAppMenuLeftModule;
}());

//

/**
 * @module
 * @description
 * Entry point for all public APIs of the async local storage package.
 */

exports.AppModule = AppModule;
exports.AppComponent = AppComponent;
exports.PxtAppHeaderModule = PxtAppHeaderModule;
exports.PxtAppHeaderComponent = PxtAppHeaderComponent;
exports.PxtAppSidenavComponent = PxtAppSidenavComponent;
exports.PxtAppSidenavModule = PxtAppSidenavModule;
exports.PxtAppModule = PxtAppModule;
exports.PxtAppComponent = PxtAppComponent;
exports.PxtAppMenuLeftComponent = PxtAppMenuLeftComponent;
exports.PxtAppMenuLeftModule = PxtAppMenuLeftModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
