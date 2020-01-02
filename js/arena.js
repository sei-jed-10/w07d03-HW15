class Arena{
    constructor(name){
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.gladiators=[];
    }
    
    addGladiator(gl){
        if(this.gladiators.length<2)
         this.gladiators.push(gl);
    }
    fight(){
        if((this.gladiators[0]=="Trident" && this.gladiators[1]=="Spear")||(this.gladiators[1]=="Trident" && this.gladiators[0]=="Spear"))
        console.log("Trident beats Spear")
        else if((this.gladiators[0]=="Spear" && this.gladiators[1]=="Club")||(this.gladiators[1]=="Spear" && this.gladiators[0]=="Club"))
        console.log("Spear beats Club")
        else if((this.gladiators[0]=="Club" && this.gladiators[1]=="Trident")||(this.gladiators[1]=="Club" && this.gladiators[0]=="Trident"))
        console.log("Club beats Trident")
        else if(this.gladiators[0]==this.gladiators[1])
        console.log("both eliminated")
        }
}