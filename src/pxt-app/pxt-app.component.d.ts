import { OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
export declare class PxtAppComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    fillerNav: string[];
    pxtAppTitle: String;
    private _mobileQueryListener;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher);
    ngOnDestroy(): void;
    shouldRun: boolean;
}
