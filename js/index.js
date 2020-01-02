import Gladiator from `./gladiator.js`
import Arena from `./arena.js`


var g = Gladiator();
var a = Arena();

const max = new Gladiator("Maximus", "trident");
console.log(max.name); // "Maximus"
console.log(max.weapon);

const colosseum = new Arena("Colosseum");
colosseum.addGladiator("max");
colosseum.addGladiator("abdoh");
console.log(colosseum.fight());
console.log(colosseum.gladiators);