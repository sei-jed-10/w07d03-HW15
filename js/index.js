

const max = new Gladiator("Maximus","Trident");
 const titus = new Gladiator("Titus","Spear");
 const andronicus = new Gladiator("Andronicus","Spear");
 const colosseum = new Arena("Colosseum");

 colosseum.addGladiator(max);
 colosseum.addGladiator(titus);
 colosseum.addGladiator(andronicus);

 console.log(colosseum.gladiators.length);