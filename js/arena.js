class Arena {
    constructor (name) {
        this.name = name.toUpperCase().chartAt(0) + name.slice(1);
        this.gladiators = [];
    }
    addGladiator (name) {
        if (this.gladiators.length() < 2) {
            this.gladiators.push(name);
        }
    }
    removeGladiator (name) {
        this.gladiators.remove(name);
    }
    fight () {
        if (this.gladiators.length() === 2) {
            let firstWeapon = this.gladiators[0].weapon;
            let secondWeapon = this.gladiators[1].weapon;
            if (firstWeapon === secondWeapon) {
                this.gladiators.pop();
                console.log ("all are eliminated");
            }
            else if (firstWeapon === "Spear" && secondWeapon === "Club") {
                this.gladiators.pop(); // Spear beats Club
                console.log ("Spear wins"):
            }
            else if (firstWeapon === "Club" && secondWeapon === "Spear") {
                this.gladiators.pop(); // Club beats Trident
                console.log ("Club wins");
            }
            else if (firstWeapon === "Trident" && secondWeapon === "Spear") {
                this.gladiators.pop(); // Trident beats Spear
                console.log ("Trident wins");
            }
            else {
                console.log ("it's a tie");
            }
        }
    }
}