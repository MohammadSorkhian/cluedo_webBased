const WEAPON='weapon';
const CHARACTER='character';
const ROOM='room';

class Card{
    kind = null;
    name = null;

    constructor(name,kind) {
        this.name = name;
        this.kind = kind;
    }
}

module.exports = {
    Card: Card,
    WEAPON: WEAPON,
    CHARACTER: CHARACTER,
    ROOM: ROOM}