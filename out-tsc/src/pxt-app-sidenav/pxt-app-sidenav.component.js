"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layout_1 = require("@angular/cdk/layout");
var core_1 = require("@angular/core");
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
        { type: core_1.Component, args: [{
                    selector: 'pxt-sidenav',
                    templateUrl: 'pxt-app-sidenav.component.html',
                    styleUrls: ['pxt-app-sidenav.component.css'],
                },] },
    ];
    /** @nocollapse */
    PxtAppSidenavComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef },
        { type: layout_1.MediaMatcher }
    ]; };
    return PxtAppSidenavComponent;
}());
exports.PxtAppSidenavComponent = PxtAppSidenavComponent;
/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 
//# sourceMappingURL=pxt-app-sidenav.component.js.map