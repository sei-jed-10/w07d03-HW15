import Gladiator from 
"./gladiator"

class Arena extends Gladiator {
    constructor(name){
        this.name = name.toUpperCase()
        this.gladiotors = [].slice(0,2);
    }
}

const colosseum = new Arena("Colosseum");
console.log(colosseum.name);

const colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators);


export default Gladiator

