import download from "./utils/downloader";
import Game from "./game/game";
import * as DrawUtils from "./drawUtils";
import * as Display from "./ui/ui";

$.get('resources/gameTree.json').done(loadGame).fail(() => loadGame());

function loadGame(tree = Game.calculateWinTree()) {
    const size = 729;

    Display.createColourLegend($('#legendContainer'), colourMapping, size, 100);

    var levelDicts = [];

    var options = { drawSubpixels: false, colourMapping };
    DrawUtils.populateDrawDict(levelDicts, tree, { x: 0, y: 0, width: size, height: size }, options);
    //utils.downloadString(JSON.stringify(tree), "gameTree.json");

    var cs = Display.createToggleableLayers(levelDicts.length, size, $('#canvasContainer'), $('#toggleContainer'));

    for (var i = 0; i < cs.length; i++) {
        Display.render(cs[i].getContext('2d'), levelDicts[i]);
    }
}

function colourMapping(score) {
    var drawOffset = 1 - Math.abs(0.5 - score) / 0.5;
    return [255 * score + drawOffset * 127, drawOffset * 255, 255 * (1 - score) - drawOffset * 127];
}
