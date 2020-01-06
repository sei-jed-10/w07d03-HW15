
class Gladiator{
    constructor(name, weapon){
        const weapons = ['Spear', 'Club', 'Trident']
        this.name = name
        if(weapons.includes(weapon)){
            this.weapon = weapon
        }else{
            console.log("plese chose weapon"); 
        }
    }
}