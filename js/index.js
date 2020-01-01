// const max = new Gladiator("Maximus", "Trident");
// console.log(max.name); // "Maximus"
// console.log(max.weapon); // "Trident"

let titus = new Gladiator("Titus","Sword");
let andronicus = new Gladiator("Andronicus","Sword");
let colosseum = new Arena("Colosseum");

// colosseum.addGladiator(max); 
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);

console.log(colosseum.gladiators.length);