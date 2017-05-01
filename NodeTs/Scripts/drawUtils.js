define(["require", "exports"], function (require, exports) {
    "use strict";
    function populateDrawDict(levelDicts, node, ref, options) {
        var score = node.score;
        var level = node.id.length;
        if (levelDicts.length < level) {
            levelDicts.push({});
        }
        var dict = levelDicts[level - 1];
        var fill = rgbArrToHexStr(options.colourMapping(score));
        var rect = [ref.x, ref.y, ref.width, ref.height];
        if (node.children.length) {
            var subWidth = ref.width / 3;
            var subHeight = ref.height / 3;
            if (!options.drawSubpixels && subWidth < 1)
                return;
            for (var i = 0; i < node.children.length; i++) {
                var child = node.children[i];
                var move = parseInt(child.id[child.id.length - 1]);
                var subX = ref.x + subWidth * (move % 3);
                var subY = ref.y + subHeight * Math.floor(move / 3);
                populateDrawDict(levelDicts, child, { x: subX, y: subY, width: subWidth, height: subHeight }, options);
            }
        }
        if (level === 0)
            return;
        if (dict[fill] !== undefined)
            dict[fill].push(rect);
        else
            dict[fill] = [rect];
    }
    exports.populateDrawDict = populateDrawDict;
    function rgbArrToHexStr(arr) {
        return arr.map(byteToHex).join("");
    }
    function byteToHex(byte) {
        var hexStr = Number(Math.floor(byte)).toString(16);
        return (hexStr.length === 2) ? hexStr : "0" + hexStr;
    }
});
//# sourceMappingURL=drawUtils.js.map