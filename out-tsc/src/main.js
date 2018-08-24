"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var environment_1 = require("./environments/environment");
var pxt_app_module_1 = require("./pxt-app/pxt-app.module");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(pxt_app_module_1.PxtAppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map