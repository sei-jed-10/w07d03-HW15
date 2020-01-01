class Arena{
    constructor(name){
      this.name = name;
      this.gladiators = [];
    }
    get name() {
      return this._name.charAt(0).toUpperCase() + this._name.slice(1);
    }
    set name(newName) {
      this._name = newName;  
    }
    addGladiator(new_gladiator){
      this.gladiators.push(new_gladiator);
      if (this.gladiators.length > 2) {
        this.gladiators.pop();
      }
    }
    fight(){
      let first_gladiator = this.gladiators[0].weapon
      let second_gladiator = this.gladiators[1].weapon
      
      if ((first_gladiator == "Trident" && second_gladiator == "Spear") || (first_gladiator == "Spear" && second_gladiator == "Club") || (first_gladiator == "Club" && second_gladiator == "Trident")){
        this.gladiators.pop();
      }else if (first_gladiator == second_gladiator) {
        this.gladiators.pop();
        this.gladiators.shift();
      }
    }
}
  //1: An arena has a name:
  // const colosseum = new Arena("Colosseum");
  // console.log(colosseum.name); // => Colosseum
  
  //2: The name should be capitalized:
  // const colosseum = new Arena("megalopolis");
  // console.log(colosseum.name); // => Megalopolis
  
  //3: An arena can have gladiators:
  // const colosseum = new Arena("Colosseum");
  // console.log(colosseum.gladiators); // => []
  
  //4: You can add a gladiator to the arena:
  // const max = new Gladiator("Maximus","Trident");
  // const colosseum = new Arena("Colosseum");
  // colosseum.addGladiator(max);
  // console.log(colosseum.gladiators); // => [Gladiator]
  
  //5: The arena should never have more than 2 gladiators in it at a time:
  // const max = new Gladiator("Maximus","Trident");
  // const titus = new Gladiator("Titus","Sword");
  // const andronicus = new Gladiator("Andronicus","Sword");
  // const colosseum = new Arena("Colosseum");
  
  // colosseum.addGladiator(max);
  // colosseum.addGladiator(titus);
  // colosseum.addGladiator(andronicus);
  
  // console.log(colosseum.gladiators.length); // => 2
  
  //6: If there are two gladiators in the arena:
  const max = new Gladiator("Maximus","Trident");
  const titus = new Gladiator("Titus","Spear");
  const colosseum = new Arena("Colosseum");
  
  colosseum.addGladiator(max);
  colosseum.addGladiator(titus);
  colosseum.fight();
  
  console.log(colosseum.gladiators); // => [max]