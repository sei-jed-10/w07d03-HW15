class Gladiator{
    constructor(name,weapon){
    const weapons = ['spear', 'club', 'trident']
    this.name = name;
    this.weapon = weapon;
    if (weapons.includes(weapon)){
        console.log("Weclome to the arena where every man for himself");
    }else {
      console.log("the Gladiator only can use spear, club or trident");
    
       }
    
    }
    
    
    
    }
    
    