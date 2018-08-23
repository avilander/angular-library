import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
var PxtAppHeaderComponent = /** @class */ (function () {
    function PxtAppHeaderComponent(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array.from({ length: 50 }, function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.shouldRun = true;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    PxtAppHeaderComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    PxtAppHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pxt-header',
                    // templateUrl: './pxt-app-header.component.html',
                    template: "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\">\n <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n   <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n   <h1 class=\"example-app-name\">Responsive App</h1>\n </mat-toolbar>\n\n <mat-sidenav-container class=\"example-sidenav-container\"\n                        [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n   <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n     <mat-nav-list>\n       <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a>\n     </mat-nav-list>\n   </mat-sidenav>\n\n   <mat-sidenav-content>\n     <p *ngFor=\"let content of fillerContent\">{{content}}</p>\n   </mat-sidenav-content>\n </mat-sidenav-container>\n</div>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container {\n              display: flex;\n              flex-direction: column;\n              position: absolute;\n              top: 0;\n              bottom: 0;\n              left: 0;\n              right: 0;\n            }\n            .example-is-mobile .example-toolbar {\n              position: fixed;\n              z-index: 2;\n            }\n            h1.example-app-name {\n              margin-left: 8px;\n            }\n            .example-sidenav-container {\n              flex: 1;\n            }\n            .example-is-mobile .example-sidenav-container {\n              flex: 1 0 auto;\n            }"]
                },] },
    ];
    /** @nocollapse */
    PxtAppHeaderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: MediaMatcher }
    ]; };
    return PxtAppHeaderComponent;
}());
export { PxtAppHeaderComponent };
//# sourceMappingURL=pxt-app-header.component.js.map