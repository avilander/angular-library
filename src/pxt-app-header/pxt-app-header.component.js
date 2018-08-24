import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
var PxtAppHeaderComponent = /** @class */ (function () {
    function PxtAppHeaderComponent(changeDetectorRef, media) {
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
                    template: "<mat-toolbar color=\"primary\" class=\"example-toolbar\">\n              <button mat-icon-button><mat-icon>menu</mat-icon></button>\n              <h1 class=\"example-app-name\">{{pxtAppTitle}}</h1>\n              <button mat-raised-button color=\"primary\" class=\"buton-action\"\n                  matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n                Action\n              </button>\n              </mat-toolbar>",
                    styles: [".example-is-mobile .example-toolbar {\n              position: fixed;\n              z-index: 2;\n            }\n            h1.example-app-name {\n              margin-left: 8px;\n            }\n            .buton-action{\n              margin-left: 83%;\n              background-color: #F4511E !important;\n            }\n            .mat-toolbar.mat-primary {\n              background: #F4511E !important;\n              color: #fff;\n            }"]
                },] },
    ];
    /** @nocollapse */
    PxtAppHeaderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: MediaMatcher }
    ]; };
    PxtAppHeaderComponent.propDecorators = {
        pxtAppTitle: [{ type: Input }]
    };
    return PxtAppHeaderComponent;
}());
export { PxtAppHeaderComponent };
//# sourceMappingURL=pxt-app-header.component.js.map