
class Gladiator {   
constructor(name,weapon){                    
this.name=name ;

 



this.weapon=weapon;



}
  weapon(spear,club,Trident) {

   
  return this.weapon ;
}   





} 

const max = new Gladiator("Maximus", "Trident");
console.log(max.name);  
console.log(max.weapon);   
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
console.log(colosseum.gladiators); 

