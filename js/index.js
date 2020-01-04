    class Gladiator {
        constructor(name, weapon)
        {
            this.name = name;
            this.weapon = weapon;
        }
    }

    class Arena {
        constructor(name){
            this.name = name.charAt(0).toUpperCase() + name.slice(1);
            this.gladiators = [];
        }

        addGladiator(name)
        {
            if(this.gladiators.length < 2)
            this.gladiators.push(name);
        }

        fight() 
        {
            const firstGladiator = this.gladiators[0];
            const secondGladiator = this.gladiators[1];

            if(firstGladiator === secondGladiator){
            this.gladiators.pop();
            this.gladiators.pop();
            console.log("Both gladiators are eliminated.");
            }

            if(firstGladiator.weapon === "Trident" && secondGladiator.weapon === "Spear"){
            console.log("Trident beats Spear");
            this.gladiators = this.gladiators.filter(function(value){
            return value === firstGladiator;
            });    
            }

            // else {
            // console.log("Trident beats Spear");
            // this.gladiators = this.gladiators.filter(function(value){
            // return value === secondGladiator;
            // });    
            // }

            if(firstGladiator.weapon === "Spear" && secondGladiator.weapon === "Club"){
                console.log("Spear beats Club");
                this.gladiators = this.gladiators.filter(function(value){
                return value === firstGladiator;
                });    
                }
    
                // else {
                // console.log("Spear beats Club");
                // this.gladiators = this.gladiators.filter(function(value){
                // return value === secondGladiator;
                // });    
                // }

                if(firstGladiator.weapon === "Club" && secondGladiator.weapon === "Trident"){
                    console.log("Club beats Trident");
                    this.gladiators = this.gladiators.filter(function(value){
                    return value === firstGladiator;
                    });    
                    }
        
                    // else {
                    // console.log("Club beats Trident");
                    // this.gladiators = this.gladiators.filter(function(value){
                    // return value === secondGladiator;
                    // });    
                    // }

        }
    }

// const max = new Gladiator("Maximus", "Trident");
// console.log(max.name); // "Maximus"
// console.log(max.weapon); // "Trident"


// const colosseum = new Arena("megalopolis");
// console.log(colosseum.name); // => Megalopolis
// console.log(colosseum.gladiators); // => []

// const max = new Gladiator("Maximus","Trident");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// console.log(colosseum.gladiators); // => [Gladiator]

// const max = new Gladiator("Maximus","Trident");
// const titus = new Gladiator("Titus","Sword");
// const andronicus = new Gladiator("Andronicus","Sword");
// const colosseum = new Arena("Colosseum");

// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.addGladiator(andronicus);

// console.log(colosseum.gladiators.length); // => 2

const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Spear");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

console.log(colosseum.gladiators); // => [max]