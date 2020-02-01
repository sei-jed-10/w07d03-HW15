let titus = new Gladiator("Titus","Sword");
let andronicus = new Gladiator("Andronicus","Sword");
let colosseum = new Arena("Colosseum");

colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);

console.log(colosseum.gladiators.length);