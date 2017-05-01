import GameNode from "./node";

function calculateWinTree() {
    return calculateWinTreeHelper([]);
}

function calculateWinTreeHelper(path) {
    var nodeId = path.join("");
    var level = path.length;


}

export default { calculateWinTree };