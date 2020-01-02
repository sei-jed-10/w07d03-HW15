
      var gladiators=[];
      class Arena {
        
      constructor (name){
        
        this.name= name.charAt(0).toUpperCase()+name.slice(1);
        gladiators = [new Gladiator()]
      }

      addGladiator(newGladiators){
        if (gladiators.length()<2){
          gladiators.push(newGladiators);
        }
        
      }

      fight (){
        if((gladiators.length()==2)){
          if(gladiators[0].name=="Maximus"){
            gladiators[1].delete();
          }
          else if(gladiators[1].name=="Maximus"){
            gladiators[0].delete();
          }
          if(gladiators[0].weapon=="Trident"||gladiators[1].weapon=="Trident"){
            if(gladiators[0].weapon=="Spear"){
              gladiators[0].delete();
            }
              if(gladiators[1].weapon=="Spear"){
                gladiators[1].delete();
              }
          }
          else if(gladiators[0].weapon=="Spear"||gladiators[1].weapon=="Spear"){
            if(gladiators[0].weapon=="Club"){
              gladiators[0].delete();
            }
              if(gladiators[1].weapon=="Club"){
                gladiators[1].delete();
              }
          }
          else if(gladiators[0].weapon=="Club"||gladiators[1].weapon=="Club" ){
            if(gladiators[0].weapon=="Trident"){
              gladiators[0].delete();
            }
              if(gladiators[1].weapon=="Trident"){
                gladiators[1].delete();
              }
          }
          else if(gladiators[0].weapon==gladiators[1].weapon){
            gladiators[0].delete();
            gladiators[1].delete();
          }
        }
      }

      removeGladiators (name) {
        if(gladiators[0].name==name){
          gladiators[0].delete();
        }
        else if(gladiators[1].name==name){
          gladiators[1].delete();
        }
      }

      entertained(){
        if(gladiators[0].name=="Maximus"||gladiators[1].name=="Maximus"){
          return true;
        }
        else 
          return false;
      }

      }