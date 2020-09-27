const pokemon = require('pokemon');
var pokemonName=pokemon.random('en');
var pokemonId=pokemon.getId(pokemonName);

for (let index = 25; index < 36; index++) {
 
    console.log(pokemon.getName(index));
}

console.log(pokemonId,pokemonName);

