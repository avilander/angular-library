import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
var PxtAppComponent = /** @class */ (function () {
    function PxtAppComponent(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.pxtAppTitle = "Title app";
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
        { type: Component, args: [{
                    selector: 'pxt-app',
                    template: "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\">\n                    <pxt-header [pxtAppTitle]=\"pxtAppTitle\"> </pxt-header>\n                </div>\n                <div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container {\n              display: flex;\n              flex-direction: column;\n              position: absolute;\n              top: 0;\n              bottom: 0;\n              left: 0;\n              right: 0;\n            }"]
                },] },
    ];
    /** @nocollapse */
    PxtAppComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: MediaMatcher }
    ]; };
    return PxtAppComponent;
}());
export { PxtAppComponent };
//# sourceMappingURL=pxt-app.component.js.map