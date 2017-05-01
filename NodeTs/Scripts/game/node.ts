export default class GameNode {
    public id: string;
    public score: number;
    public children: GameNode[];

    constructor(id: string, score?: number) {
        this.id = id;
        this.score = score;
        this.children = [];
    }
}