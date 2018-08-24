import { OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { PxtAppModel } from './../models/pxt-app.model';
export declare class PxtAppComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    pxtAppModel: PxtAppModel;
    fillerNav: string[];
    pxtAppTitle: String;
    private _mobileQueryListener;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher);
    ngOnDestroy(): void;
    shouldRun: boolean;
}
