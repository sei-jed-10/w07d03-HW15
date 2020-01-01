
class Arena extends Gladiator{

    constructor(arenaName,name,weapon){
        super(name, weapon)
        this.arenaName =arenaName
        this.gladiators = []
        this.cap  = function(){

            this.arenaName.charAt(0).toUpperCase()
        }
        this.cap()
    }

 fight(){

  
  

    this.gladiators.map(x=>{
     
      if (x.weapon == "Spear" || x.weapon =="Trident"){
        this.gladiators.splice(x.weapon.includes("Trident")) ;
         
      }
      else if (x.weapon == "Spear" || x.weapon =="Club"){
        this.gladiators.splice(x.weapon.includes("Spear")) ;
         
      }

        
   else if (x.weapon == "Club" || x.weapon =="Trident"){
        this.gladiators.splice(x.weapon.includes("Club")) ;
         
      }
      else{
    }
    
    
        
     })
 }

   
    addGladiator(Gladiator){

       
        if (this.gladiators.length == 2){
          console.log("the arena is full call fight before adding new Gladiator:")
           
         }else{
 this.gladiators.push(Gladiator)
         }
    }


    gladiatorsArr(){
        console.log(this.gladiators)

    }

   
}

c = new Arena("coloisum")

c.addGladiator(safwan)
c.addGladiator(ali)
c.gladiatorsArr()

 c.addGladiator(ali)

c.fight()
 
 
 c.gladiatorsArr()