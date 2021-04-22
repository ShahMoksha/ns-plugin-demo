"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateOptions(options) {
    if (isNaN(options.intensity)) {
        options.intensity = 100;
    }
    if (options.intensity < 0) {
        options.intensity = 0;
    }
    if (options.intensity > 100) {
        options.intensity = 100;
    }
}
exports.validateOptions = validateOptions;
//# sourceMappingURL=ns-plugin-demo.common.js.map