const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Spear");
const andronicus = new Gladiator("Andronicus","Spear");
const colosseum = new Arena("Colosseum");


colosseum.addGladiator(max.weapon);
colosseum.addGladiator(titus.weapon);
colosseum.addGladiator(andronicus.weapon);


//--------------------------

colosseum.fight()

console.log(colosseum.gladiators);


//-----------------------


