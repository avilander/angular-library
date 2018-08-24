"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../polyfills");
var table_1 = require("@angular/cdk/table");
var tree_1 = require("@angular/cdk/tree");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var layout_1 = require("@angular/cdk/layout");
var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [
                        table_1.CdkTableModule,
                        tree_1.CdkTreeModule,
                        material_1.MatAutocompleteModule,
                        material_1.MatBadgeModule,
                        material_1.MatBottomSheetModule,
                        material_1.MatButtonModule,
                        material_1.MatButtonToggleModule,
                        material_1.MatCardModule,
                        material_1.MatCheckboxModule,
                        material_1.MatChipsModule,
                        material_1.MatStepperModule,
                        material_1.MatDatepickerModule,
                        material_1.MatDialogModule,
                        material_1.MatDividerModule,
                        material_1.MatExpansionModule,
                        material_1.MatGridListModule,
                        material_1.MatIconModule,
                        material_1.MatInputModule,
                        material_1.MatListModule,
                        material_1.MatMenuModule,
                        material_1.MatNativeDateModule,
                        material_1.MatPaginatorModule,
                        material_1.MatProgressBarModule,
                        material_1.MatProgressSpinnerModule,
                        material_1.MatRadioModule,
                        material_1.MatRippleModule,
                        material_1.MatSelectModule,
                        material_1.MatSidenavModule,
                        material_1.MatSliderModule,
                        material_1.MatSlideToggleModule,
                        material_1.MatSnackBarModule,
                        material_1.MatSortModule,
                        material_1.MatTableModule,
                        material_1.MatTabsModule,
                        material_1.MatToolbarModule,
                        material_1.MatTooltipModule,
                        material_1.MatTreeModule,
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpClientModule,
                        material_1.MatNativeDateModule,
                        forms_1.ReactiveFormsModule,
                        common_1.CommonModule,
                        animations_1.BrowserAnimationsModule,
                        layout_1.LayoutModule
                    ]
                },] },
    ];
    return AngularMaterialModule;
}());
exports.AngularMaterialModule = AngularMaterialModule;
//# sourceMappingURL=angular-material.module.js.map