class Gladiator {
    constructor(name, weapon){
      this.name = name
      this.weapon = weapon
}
   addGladiator(){

   }
}

const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"


class Arena extends Gladiator{
    constructor(name){
        super (name)
        this.name = name
        this.gladiators = []
        console.log(name.charAt(0).toUpperCase() + name.slice(1))
 }
   
  fight(){
 
  }
 
  removeGlad(name){
 
  }
 }


// const colosseum = new Arena("Colosseum");
// console.log(colosseum.name); // => Colosseum  ====DONE====
// const colosseum = new Arena("megalopolis");
// console.log(colosseum.name); // => Megalopolis   ====DONE====
// const colosseum = new Arena("Colosseum");
// console.log(colosseum.gladiators); // => []      ====DONE====
const max = new Gladiator("Maximus","Trident");  
// const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
// console.log(colosseum.gladiators); // => [Gladiator]
// // The arena should never have more than 2 gladiators in it at a time
// const max = new Gladiator("Maximus","Trident");
// const titus = new Gladiator("Titus","Sword");
// const andronicus = new Gladiator("Andronicus","Sword");
// const colosseum = new Arena("Colosseum");

// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.addGladiator(andronicus);

// console.log(colosseum.gladiators.length); // => 2


// // If there are two gladiators in the arena, you can call a fight method that results in the elimination of one of the gladiators from the arena.
// // Winning conditions
// // Trident beats Spear
// // Spear beats Club
// // Club beats Trident
// // If the two gladiators have the same weapon, they are both eliminated.

// const max = new Gladiator("Maximus","Trident");
// const titus = new Gladiator("Titus","Spear");
// const colosseum = new Arena("Colosseum");

// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.fight();

// console.log(colosseum.gladiators); // => [max]











