const WEAPON='weapon';
const Character='character';
const Room='room';

class Card{

    kind = null;
    name = null;

    constructor(name,kind) {
        this.name = name;
        this.kind = kind;
    }

    static get ROOM() {
        return this.ROOM;
    }

    static get CHARACTER() {
        return this.CHARACTER;
    }

    static get WEAPON() {
        return this.WEAPON;
    }
}