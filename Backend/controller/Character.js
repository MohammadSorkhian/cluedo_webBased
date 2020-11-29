const  CharacterSpec = [

    {name : 'Colonel Mustard',
    color:"#ffbf00",
    position:[23,6]  // Col, Row
    },
    {name : 'Miss Scarlet',
    color:"#ff0000",
    position:[16,0] // Col, Row
    },
    {name : 'Professor Plum',
        color:"#cc0099",
        position:[0,5] // Col, Row
    },
    {name : 'Mr Green',
        color:"#00b33c",
        position:[9,23] // Col, Row
    },
    {name : 'Mrs. White',
        color:"#f2f2f2",
        position:[14,23] // Col, Row
    },
    {name : 'Mrs. Peacock',
        color:"#4d4dff",
        position:[0,18] // Col, Row
    }
];

class Character{

name = null;
color = null;

constructor(name, color){

    this.color = color;
    this.name = name;
}
}


module.exports = {
Character : Character,
CharacterSpec : CharacterSpec
};