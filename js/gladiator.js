class Gladiator{
    constructor(name, weapon){
        const weapons = ['Spear', 'Club', 'Trident']
        this.name = name
        if(weapons.includes(weapon)){
            this.weapon = weapon.toLowerCase()
        }else{
            console.log("please specify correct weapon!!!"); 
        }
    }
}