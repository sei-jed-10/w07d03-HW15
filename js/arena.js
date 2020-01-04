class Arena{
    constructor(name) {
        this.name = name.charAt(0).toUpperCase() + name.substring(1);
        this.gladiators = [];
        this.gladiatorsName = [];
        this.counter = 1;
    }
    addGladiator(name){
        if (this.gladiators.length <= 1){
            this.gladiators.push("Gladiator"+this.counter);
            this.gladiatorsName.push(name);
            this.counter++;
        }
    }
    fight(){
        //console.log(this.gladiatorsName[0].name)
        //console.log(this.gladiatorsName[0].weapon)
        //console.log(this.gladiatorsName[1].name)
        //console.log(this.gladiatorsName[1].weapon)

        var glaOneW = this.gladiatorsName[0].weapon;
        var glaTowW = this.gladiatorsName[1].weapon;
        // console.log(glaOneW)
        // console.log(glaTowW)

        // Trident beats Spear
        // Spear beats Club
        // Club beats Trident
        // If the two gladiators have the same weapon, they are both eliminated.

        if (this.gladiatorsName.length == 2){
            if (glaOneW == "Trident" && glaTowW == "Spear"){
                this.gladiators=[this.gladiatorsName[0].name]
            }
            else if (glaOneW == "Spear" && glaTowW == "Trident"){
                 this.gladiators=[this.gladiatorsName[1].name]
            }
            else if (glaOneW == "Spear" && glaTowW == "Club"){
                 this.gladiators=[this.gladiatorsName[0].name]
            }
            else if (glaOneW == "Club" && glaTowW == "Spear" ){
                 this.gladiators=[this.gladiatorsName[1].name]
            }
            else if (glaOneW == "Club" && glaTowW == "Trident"){
                 this.gladiators=[this.gladiatorsName[0].name]
            }
            else if (glaOneW == "Trident" && glaTowW == "Club"){
                 this.gladiators=[this.gladiatorsName[1].name]
            }
            else if (glaOneW == glaTowW){
                 console.log("eliminated")
            }
        }else{
            console.log("gladiatorsName.length < 2")
        }
    }
}
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);
console.log(colosseum.gladiators.length); // => 2
console.log(colosseum.gladiators);
colosseum.fight();

console.log(colosseum.gladiators); // => [max]