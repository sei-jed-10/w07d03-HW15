class Arena {
    constructor(name){
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.gladiators = [];
    }

    addGladiator(gladiator){
        if (this.gladiators.length < 2) {
            this.gladiators.push(gladiator)
          } else {
            console.log("you can't have more than two gladiators")
          }
    }
    fight(){
        let wep1 = this.gladiators[0].weapon
        let wep2 = this.gladiators[1].weapon
    
        if (wep1 === wep2) {
          console.log('Both gladiators eliminated')
          this.gladiators.splice(0,2)
        }
    
        if (wep1 === 'Trident' && wep2 === 'Spear') {
          console.log('Trident beats Spear')
          this.gladiators.splice(1,1)
        }
    
        if (wep1 === 'Trident' && wep2 === 'Club') {
          console.log('Club beats Trident')
          this.gladiators.splice(0,1)
        }
    
        if (wep1 === 'Spear' && wep2 === 'Club') {
          console.log('Spear beats Club')
          this.gladiators.splice(1,1)
        }
    
        if (wep1 === 'Spear' && wep2 === 'Trident') {
          console.log('Trident beats Spear')
          this.gladiators.splice(0,1)
        }
    
        if (wep1 === 'Club' && wep2 === 'Trident') {
          console.log('Club beats Trident')
          this.gladiators.splice(1,1)
        }
    
        if (wep1 === 'Club' && wep2 === 'Spear') {
          console.log('Spear beats Club')
          this.gladiators.splice(0,1)
        }
      
    }

}

// let colosseum = new Arena('Colosseum')

// colosseum.addGladiator(max)
// colosseum.addGladiator(titus)
// // colosseum.addGladiator(andronicus)
// colosseum.fight()