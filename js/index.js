
const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Spear");
const colosseum = new Arena("Colosseum");
console.log(colosseum.name); // => Colosseum
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
console.log(colosseum.gladiators); 
console.log(colosseum.gladiators.length); // => 2

const andronicus = new Gladiator("Andronicus","Club");
colosseum.addGladiator(andronicus);
colosseum.fight();
colosseum.addGladiator(andronicus);
console.log(colosseum.gladiators); 
