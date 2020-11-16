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
}

module.exports = Card;