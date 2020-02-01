class Arena{
    constructor(name){
        this.gladiators = []
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
    }

    addGladiator(gladiator){
        if(this.gladiators.length < 2){this.gladiators.push(gladiator)}
    }

    fight(){
        if (this.gladiators.length == 2) {
            if ((this.gladiators[0].weapon == 'traident' && this.gladiators[1].weapon == 'spear')) {
                this.gladiators = this.gladiators[0]
            }else if((this.gladiators[1].weapon == 'traident' && this.gladiators[0].weapon == 'spear')){
                this.gladiators = this.gladiators[1]
            }else if((this.gladiators[0].weapon == 'spear' && this.gladiators[1].weapon == 'club')) {
                this.gladiators = this.gladiators[0]
            }else if((this.gladiators[1].weapon == 'spear' && this.gladiators[0].weapon == 'club')){
                this.gladiators = this.gladiators[1]
            }else if((this.gladiators[0].weapon == 'club' && this.gladiators[1].weapon == 'trident')) {
                this.gladiators = this.gladiators[0]
            }else if((this.gladiators[1].weapon == 'club' && this.gladiators[0].weapon == 'trident')){
                this.gladiators = this.gladiators[1]
            }else{
                this.gladiators = []
            }
        }else{
            console.log("please have just two gladiators!");
        }
    }
}