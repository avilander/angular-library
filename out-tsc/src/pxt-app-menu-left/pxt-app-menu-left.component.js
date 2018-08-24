"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var layout_1 = require("@angular/cdk/layout");
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
        { type: core_1.Component, args: [{
                    selector: 'pxt-header',
                    // templateUrl: './pxt-app-header.component.html',
                    template: " <mat-sidenav-container class=\"example-sidenav-container\"\n                    [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                  [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                <mat-nav-list>\n                    <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a>\n                </mat-nav-list>\n                </mat-sidenav>\n  \n     <mat-sidenav-content>\n       <p *ngFor=\"let content of fillerContent\">{{content}}</p>\n     </mat-sidenav-content>\n   </mat-sidenav-container>",
                    styles: [".example-container {\n                display: flex;\n                flex-direction: column;\n                position: absolute;\n                top: 0;\n                bottom: 0;\n                left: 0;\n                right: 0;\n              }\n              .example-is-mobile .example-toolbar {\n                position: fixed;\n                z-index: 2;\n              }\n              h1.example-app-name {\n                margin-left: 8px;\n              }\n              .example-sidenav-container {\n                flex: 1;\n              }\n              .example-is-mobile .example-sidenav-container {\n                flex: 1 0 auto;\n              }"]
                },] },
    ];
    /** @nocollapse */
    PxtAppMenuLeftComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef },
        { type: layout_1.MediaMatcher }
    ]; };
    return PxtAppMenuLeftComponent;
}());
exports.PxtAppMenuLeftComponent = PxtAppMenuLeftComponent;
//# sourceMappingURL=pxt-app-menu-left.component.js.map