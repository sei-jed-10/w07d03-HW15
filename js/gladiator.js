class Gladiator{
    constructor(name,weapon) {
        this.name = name;
        this.weapon = weapon;
      }
      
}

const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"