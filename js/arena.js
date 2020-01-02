class Gladiator{
    constructor(name,weapon) {
        this._name = name;
        this._weapon = weapon;
      } 

    set addGladiator(name){
        this._name = name;
        //this._weapon = weapon;

      }
}


class Arena extends Gladiator{
    constructor(name) {
        this._name = name;
       }

    get name() {
        return this._name.charAt(0).toUpperCase() + this._name.substring(1);;
      }

    addGladiator(name){
        super (name)
        //this._gladiators.push(gladiator)
        //console.log(this._gladiators)

      }
}

// class Arena extends Gladiator{
//     constructor(name) {
//         this._name = name;
//         this._gladiators = [];
//       }

//       get name() {
//         return this._name.charAt(0).toUpperCase() + this._name.substring(1);;
//       }

//       addGladiator(gladiator){
//         this._gladiators.push(gladiator)
//         console.log(this._gladiators)

//       }

//     //   gladiators(gladiator){
//     //       this._gladiators.push(gladiator)
//     //       console.log(this._gladiators)


//     //   }

// }

const colosseum = new Arena("megalopolis");
console.log(colosseum.name); // => Colosseum
//colosseum.gladiators("ward")
