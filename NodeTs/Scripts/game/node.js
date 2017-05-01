define(["require", "exports"], function (require, exports) {
    "use strict";
    var GameNode = (function () {
        function GameNode(id, score) {
            this.id = id;
            this.score = score;
            this.children = [];
        }
        return GameNode;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GameNode;
});
//# sourceMappingURL=node.js.map