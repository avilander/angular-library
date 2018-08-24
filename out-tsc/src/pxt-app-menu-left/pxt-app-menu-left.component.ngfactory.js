"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("../../node_modules/@angular/material/list/typings/index.ngfactory");
var i2 = require("@angular/material/list");
var i3 = require("../../node_modules/@angular/material/sidenav/typings/index.ngfactory");
var i4 = require("@angular/material/sidenav");
var i5 = require("@angular/cdk/bidi");
var i6 = require("@angular/platform-browser/animations");
var i7 = require("@angular/cdk/a11y");
var i8 = require("@angular/cdk/platform");
var i9 = require("@angular/common");
var i10 = require("./pxt-app-menu-left.component");
var i11 = require("@angular/cdk/layout");
var styles_PxtAppMenuLeftComponent = [".example-container[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                position: absolute;\n                top: 0;\n                bottom: 0;\n                left: 0;\n                right: 0;\n              }\n              .example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n                position: fixed;\n                z-index: 2;\n              }\n              h1.example-app-name[_ngcontent-%COMP%] {\n                margin-left: 8px;\n              }\n              .example-sidenav-container[_ngcontent-%COMP%] {\n                flex: 1;\n              }\n              .example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n                flex: 1 0 auto;\n              }"];
var RenderType_PxtAppMenuLeftComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_PxtAppMenuLeftComponent, data: {} });
exports.RenderType_PxtAppMenuLeftComponent = RenderType_PxtAppMenuLeftComponent;
function View_PxtAppMenuLeftComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["routerLink", "."]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1)._handleFocus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1)._handleBlur() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i1.View_MatListItem_0, i1.RenderType_MatListItem)), i0.ɵdid(1, 1097728, null, 3, i2.MatListItem, [i0.ElementRef, [2, i2.MatNavList]], null, null), i0.ɵqud(603979776, 3, { _lines: 1 }), i0.ɵqud(335544320, 4, { _avatar: 0 }), i0.ɵqud(335544320, 5, { _icon: 0 }), (_l()(), i0.ɵted(5, 2, ["", ""]))], null, function (_ck, _v) { var currVal_0 = (i0.ɵnov(_v, 1)._avatar || i0.ɵnov(_v, 1)._icon); var currVal_1 = (i0.ɵnov(_v, 1)._avatar || i0.ɵnov(_v, 1)._icon); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit; _ck(_v, 5, 0, currVal_2); }); }
function View_PxtAppMenuLeftComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_PxtAppMenuLeftComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 13, "mat-sidenav-container", [["class", "example-sidenav-container mat-drawer-container mat-sidenav-container"]], [[4, "marginTop", "px"], [2, "mat-drawer-container-explicit-backdrop", null]], null, null, i3.View_MatSidenavContainer_0, i3.RenderType_MatSidenavContainer)), i0.ɵdid(1, 1490944, null, 2, i4.MatSidenavContainer, [[2, i5.Directionality], i0.ElementRef, i0.NgZone, i0.ChangeDetectorRef, i4.MAT_DRAWER_DEFAULT_AUTOSIZE, [2, i6.ANIMATION_MODULE_TYPE]], null, null), i0.ɵqud(603979776, 1, { _drawers: 1 }), i0.ɵqud(335544320, 2, { _content: 0 }), (_l()(), i0.ɵeld(4, 0, null, 0, 5, "mat-sidenav", [["class", "mat-drawer mat-sidenav"], ["fixedTopGap", "56"], ["tabIndex", "-1"]], [[40, "@transform", 0], [1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) { var ad = true; if (("component:@transform.start" === en)) {
        var pd_0 = (i0.ɵnov(_v, 5)._onAnimationStart($event) !== false);
        ad = (pd_0 && ad);
    } if (("component:@transform.done" === en)) {
        var pd_1 = (i0.ɵnov(_v, 5)._onAnimationEnd($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_MatSidenav_0, i3.RenderType_MatSidenav)), i0.ɵdid(5, 3325952, [[1, 4], ["snav", 4]], 0, i4.MatSidenav, [i0.ElementRef, i7.FocusTrapFactory, i7.FocusMonitor, i8.Platform, i0.NgZone, [2, i9.DOCUMENT]], { mode: [0, "mode"], fixedInViewport: [1, "fixedInViewport"], fixedTopGap: [2, "fixedTopGap"] }, null), (_l()(), i0.ɵeld(6, 0, null, 0, 3, "mat-nav-list", [["class", "mat-nav-list"], ["role", "navigation"]], null, null, null, i1.View_MatNavList_0, i1.RenderType_MatNavList)), i0.ɵdid(7, 49152, null, 0, i2.MatNavList, [], null, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_PxtAppMenuLeftComponent_1)), i0.ɵdid(9, 278528, null, 0, i9.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(10, 0, null, 1, 3, "mat-sidenav-content", [["class", "mat-drawer-content mat-sidenav-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, i3.View_MatSidenavContent_0, i3.RenderType_MatSidenavContent)), i0.ɵdid(11, 1097728, [[2, 4]], 0, i4.MatSidenavContent, [i0.ChangeDetectorRef, i4.MatSidenavContainer], null, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_PxtAppMenuLeftComponent_2)), i0.ɵdid(13, 278528, null, 0, i9.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_11 = (_co.mobileQuery.matches ? "over" : "side"); var currVal_12 = _co.mobileQuery.matches; var currVal_13 = "56"; _ck(_v, 5, 0, currVal_11, currVal_12, currVal_13); var currVal_14 = _co.fillerNav; _ck(_v, 9, 0, currVal_14); var currVal_17 = _co.fillerContent; _ck(_v, 13, 0, currVal_17); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.mobileQuery.matches ? 56 : 0); var currVal_1 = i0.ɵnov(_v, 1)._backdropOverride; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 5)._animationState; var currVal_3 = null; var currVal_4 = (i0.ɵnov(_v, 5).position === "end"); var currVal_5 = (i0.ɵnov(_v, 5).mode === "over"); var currVal_6 = (i0.ɵnov(_v, 5).mode === "push"); var currVal_7 = (i0.ɵnov(_v, 5).mode === "side"); var currVal_8 = i0.ɵnov(_v, 5).fixedInViewport; var currVal_9 = (i0.ɵnov(_v, 5).fixedInViewport ? i0.ɵnov(_v, 5).fixedTopGap : null); var currVal_10 = (i0.ɵnov(_v, 5).fixedInViewport ? i0.ɵnov(_v, 5).fixedBottomGap : null); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_15 = i0.ɵnov(_v, 11)._container._contentMargins.left; var currVal_16 = i0.ɵnov(_v, 11)._container._contentMargins.right; _ck(_v, 10, 0, currVal_15, currVal_16); }); }
exports.View_PxtAppMenuLeftComponent_0 = View_PxtAppMenuLeftComponent_0;
function View_PxtAppMenuLeftComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "pxt-header", [], null, null, null, View_PxtAppMenuLeftComponent_0, RenderType_PxtAppMenuLeftComponent)), i0.ɵdid(1, 180224, null, 0, i10.PxtAppMenuLeftComponent, [i0.ChangeDetectorRef, i11.MediaMatcher], null, null)], null, null); }
exports.View_PxtAppMenuLeftComponent_Host_0 = View_PxtAppMenuLeftComponent_Host_0;
var PxtAppMenuLeftComponentNgFactory = i0.ɵccf("pxt-header", i10.PxtAppMenuLeftComponent, View_PxtAppMenuLeftComponent_Host_0, {}, {}, []);
exports.PxtAppMenuLeftComponentNgFactory = PxtAppMenuLeftComponentNgFactory;
//# sourceMappingURL=pxt-app-menu-left.component.ngfactory.js.map