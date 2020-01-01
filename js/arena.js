class Arena
{
    constructor(name)
    {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.gladiators = [];

    }
    addGladiator(name)
    {
        if (this.gladiators.length < 2)
        {
        this.gladiators.push(name)
        
        }
        else
        {
            console.log("Two Gladiators are present")
        }
    }
    fight()
    {
        if (this.gladiators.length == 2)
        {
            const firstGladiator = this.gladiators[0].weapon;
            const secondGladiator = this.gladiators[1].weapon;
            
            if(firstGladiator == secondGladiator)
            {
                
                console.log("Both Gladiators are eliminated.")
                this.gladiators.pop();
                this.gladiators.pop(); // Resetting the gladiators array
            }
            else if(firstGladiator == "Trident" && secondGladiator == "Spear" || firstGladiator == "Spear" && secondGladiator == "Trident" )
            {
                console.log("Trident beats Spear")
                this.gladiators.pop();
                this.gladiators.pop(); // Resetting the gladiators array

            }
            else if(firstGladiator == "Club" && secondGladiator == "Spear" || firstGladiator == "Spear" && secondGladiator == "Club" )
            {
                console.log("Spear beats Club")
                this.gladiators.pop();
                this.gladiators.pop(); // Resetting the gladiators array

            }
            else if(firstGladiator == "Trident" && secondGladiator == "Club" || firstGladiator == "Club" && secondGladiator == "Trident" )
            {
                console.log("Club beats Trident")
                this.gladiators.pop();
                this.gladiators.pop(); // Resetting the gladiators array

            }
            else
            {
                console.log("Continue the fight!")
            }
        }
        

    }

    //Conditions:
    // Trident beats Spear
    // Spear beats Club
    // Club beats Trident
    // If the two gladiators have the same weapon, they are both eliminated.
    
   
    
}


const colosseum = new Arena("Colosseum");
// //console.log(colosseum.name); // => Colosseum
// //console.log(colosseum.gladiators); // => []
// var megalopolis = new Arena("megalopolis")
// //console.log(megalopolis.name) // => Megalopolis
// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// //colosseum.addGladiator(andronicus);
// console.log(colosseum.gladiators); // => [Gladiator]
// //console.log(colosseum.gladiators.length); // => 2
// colosseum.fight();
// console.log(colosseum.gladiators); // => [max]

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

console.log(colosseum.gladiators); // => [max]



