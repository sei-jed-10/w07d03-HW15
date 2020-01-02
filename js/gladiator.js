class Gladiator {
    constructor(name, weapon) {
        const allowedWeapons = ['Spear', 'Club', 'Trident']; //list of valid weapons.
        this.name = name;
        //Check if the gladiator's weapon is valid to use.
        if (allowedWeapons.findIndex(allowedWeapon => weapon.toLowerCase() === allowedWeapon.toLowerCase()) ==-1) {
            console.log("please Choose another weapon");

        } else {
            this.weapon = weapon; //if it matches one of the weapons on the list, assign it to the gladiator.
        }
    }
}

//I looked up how can I use classes of two .js files, one of the methods was to export the module in the current file, 
// and then import it in the second or target .js file, so we can create instances of the first class and use its properties in the other file.
//module.exports = Gladiator;
//and then use const Gladiator = require('./js/gladiator.js') in the other file to be able to use the class.

//However, it dosen't seem to work with the browser. So, I included this file and the other in the index.html file.
