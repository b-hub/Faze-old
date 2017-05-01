define(["require", "exports"], function (require, exports) {
    "use strict";
    function calculateWinTree() {
        return calculateWinTreeHelper([]);
    }
    function calculateWinTreeHelper(path) {
        var nodeId = path.join("");
        var level = path.length;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = { calculateWinTree: calculateWinTree };
});
//# sourceMappingURL=connect4.js.map