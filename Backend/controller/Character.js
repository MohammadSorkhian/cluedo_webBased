const  CharacterSpec = [

        {name : 'Colonel Mustard',
        color:"#ffbf00",
        position:[23,7]
        },
        {name : 'Miss Scarlet',
        color:"#ffbf00",
        position:[16,23]
        },
        {name : 'Professor Plum',
            color:"#cc0099",
            position:[0,5]
        },
        {name : 'Mr Green',
            color:"#00b33c",
            position:[9,23]
        },
        {name : 'Mrs. White',
            color:"#f2f2f2",
            position:[14,23]
        },
        {name : 'Mrs. Peacock',
            color:"#4d4dff",
            position:[0,18]
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
