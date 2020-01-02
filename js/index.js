import Gladiator from 
"./gladiator";
import Arena from 
"./arena";
export {
     Gladiator,
     Arena
}

// _______________________________________________________

const max = new Gladiator("Maximus","Trident");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
console.log(colosseum.gladiators);


// _______________________________________________________

const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Sword");
const andronicus = new Gladiator("Andronicus","Sword");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);

console.log(colosseum.gladiators.length);

// _______________________________________________________

const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Spear");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

console.log(colosseum.gladiators);

