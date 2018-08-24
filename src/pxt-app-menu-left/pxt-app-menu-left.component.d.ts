import { OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
export declare class PxtAppMenuLeftComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    fillerNav: string[];
    fillerContent: string[];
    private _mobileQueryListener;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher);
    ngOnDestroy(): void;
    shouldRun: boolean;
}
