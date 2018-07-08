twit = require("twit");

var largeArena = [
		"mall parking lot"
	,	"airport runway"
	,	"football field"
	,	"cow field"
	,	"mountainside"
];

var action = [
		"fighting"
	,	"smooching"
	,	"playing games"
]

var characters = [
		"mutants"
	,	"mercenaries"
	,	"aliens"
]

var sentence = ("Some " + arandom(characters) + " are " + arandom(action) + " on a " + arandom(largeArena) + ".");

console.log(checkGrammar(sentence));

function checkGrammar(string){
	return string;
}

function arandom(array){
	var x = Math.floor(Math.random()*array.length);	
	return array[x];
}


	