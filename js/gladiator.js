class Gladiator{
    constructor(name, weapon){
      if ((weapon === "Spear") || (weapon === "Club") || (weapon === "Trident")){
            this.name = name;
            this.weapon = weapon;  
        }else {
            throw "Invalid Weapon!";
        }
    }
}
  // const max = new Gladiator("Maximus", "Trident");
  // console.log(max.name); // "Maximus"
  // console.log(max.weapon); // "Trident"