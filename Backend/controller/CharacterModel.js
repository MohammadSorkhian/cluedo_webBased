let Card = require("./Card").Card
var Type="Character"
var CharacterSpec = {
    'Colonel Mustard':{
        color:"#ffbf00",
        position:[24,7]
        },
        'Miss Scarlet':{
        color:"#ffbf00",
        position:[16,24]
        },
        'Professor Plum':{
            color:"#cc0099",
            position:[0,5]
        },
        'Mr Green':{
            color:"#00b33c",
            position:[9,24]
        },
        'Mrs. White':{
            color:"#f2f2f2",
            position:[14,24]
        },
        'Mrs. Peacock':{
            color:"#4d4dff",
            position:[0,18]
        }
}

class Character extends Card{
    color;
    InitialPosition;
    constructor(name, type, color, position){
        super(name,type);
        this.color = color;
        this.position = position;        
    }
}

module.exports = {
    CharacterSpec:CharacterSpec,
    Character:Character,
    Type:Type
}
