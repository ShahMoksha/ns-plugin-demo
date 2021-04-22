"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applicationModule = require("tns-core-modules/application/application");
var frame_1 = require("tns-core-modules/ui/frame");
var ns_plugin_demo_common_1 = require("./ns-plugin-demo.common");
var NsPluginDemo = (function () {
    function NsPluginDemo() {
    }
    NsPluginDemo.prototype.getNative = function () {
        var context = applicationModule.android.context;
        return org.nativescript.brightness.Brightness.getScreenBrightness(context);
    };
    NsPluginDemo.prototype.get = function () {
        return Math.round((this.getNative() / 255) * 100);
    };
    NsPluginDemo.prototype.set = function (options) {
        ns_plugin_demo_common_1.validateOptions(options);
        if (android.os.Build.VERSION.SDK_INT < 23) {
            var topFrame = frame_1.topmost();
            if (topFrame && topFrame.android && topFrame.android.activity) {
                var attr = topFrame.android.activity.getWindow().getAttributes();
                attr.screenBrightness = options.intensity / 100;
                topFrame.android.activity.getWindow().setAttributes(attr);
            }
        }
        else {
            var context = applicationModule.android.foregroundActivity;
            if (context) {
                var brightnessValue = Math.round((options.intensity * 255) / 100);
                org.nativescript.brightness.Brightness.setScreenBrightness(context, brightnessValue);
            }
        }
    };
    return NsPluginDemo;
}());
exports.NsPluginDemo = NsPluginDemo;
//# sourceMappingURL=ns-plugin-demo.android.js.map