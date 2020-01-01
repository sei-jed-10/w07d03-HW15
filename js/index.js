


const max = new Gladiator("Maximus","Trident");
const colosseum = new Arena("Colosseum");
console.log(colosseum.name); // => Colosseum

colosseum.addGladiator(max);
console.log(colosseum.gladiators); // => [Gladiator]
const titus = new Gladiator("Titus","Sword");
const andronicus = new Gladiator("Andronicus","Sword");
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);
console.log(colosseum.gladiators.length); // => 2

// const titus = new Gladiator("Titus","Spear");
colosseum.fight();
console.log(colosseum.gladiators); // => [max]