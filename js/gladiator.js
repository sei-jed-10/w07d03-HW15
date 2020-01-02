class Gladiator {
    constructor (name,weapon){
        this.name= name;
        if(weapon=="Spear"||weapon=="Trident"||weapon=="Club"){
          this.weapon=weapon;
        }
        else 
        console.log("invalid weapon")
    }
    
    }