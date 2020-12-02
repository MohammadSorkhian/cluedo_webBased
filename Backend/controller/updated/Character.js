const  CharacterSpec = [

        {name : 'Colonel Mustard',
        color:"#ffbf00",
        position:[25,7]  // Col, Row
        },
        {name : 'Miss Scarlet',
        color:"#ff0000",
        position:[17,1] // Col, Row
        },
        {name : 'Professor Plum',
            color:"#cc0099",
            position:[0,8] // Col, Row
        },
        {name : 'Mr Green',
            color:"#00b33c",
            position:[8,21] // Col, Row
        },
        {name : 'Mrs. White',
            color:"#f2f2f2",
            position:[16,14] // Col, Row
        },
        {name : 'Mrs. Peacock',
            color:"#4d4dff",
            position:[0,19] // Col, Row
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