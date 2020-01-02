
const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Spear");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

console.log(colosseum.gladiators); // => [max]
//colosseum.removeGladiator("Titus");
//(colosseum.entertained)?(console.log("Crowd is entertained")):console.log("Crowd is Unintertained");
