import { OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
export declare class PxtAppHeaderComponent implements OnDestroy {
    pxtAppTitle: String;
    mobileQuery: MediaQueryList;
    private _mobileQueryListener;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher);
    ngOnDestroy(): void;
    shouldRun: boolean;
}
