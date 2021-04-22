"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ns_plugin_demo_common_1 = require("./ns-plugin-demo.common");
var NsPluginDemo = (function () {
    function NsPluginDemo() {
    }
    NsPluginDemo.prototype.getNative = function () {
        var screen = UIScreen.mainScreen;
        var currentBrightness = screen.brightness;
        return currentBrightness;
    };
    NsPluginDemo.prototype.get = function () {
        return Math.round(this.getNative() * 100);
    };
    NsPluginDemo.prototype.set = function (options) {
        ns_plugin_demo_common_1.validateOptions(options);
        var screen = UIScreen.mainScreen;
        screen.brightness = options.intensity / 100;
    };
    return NsPluginDemo;
}());
exports.NsPluginDemo = NsPluginDemo;
//# sourceMappingURL=ns-plugin-demo.ios.js.map