const max = new Gladiators("Maximus","Trident");
const titus = new Gladiators("Titus","Spear");
const andronicus = new Gladiators("Andronicus","Spear");
const colosseum = new Arena("colosseum");

colosseum.addGladiator(max.weapon);
colosseum.addGladiator(titus.weapon);
colosseum.addGladiator(andronicus.weapon);

colosseum.fight()

console.log(colosseum.gladiators);
