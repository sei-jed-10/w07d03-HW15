class Gladiator{
 constructor(name,weapon){
    this.name = name;
    if (weapon.toLowerCase() !== 'spear' && weapon.toLowerCase() !== 'club' && weapon.toLowerCase() !== 'trident')
        console.log('weapon name is wrong please choose Spear, Club or Trident');
    else this.weapon = weapon;
    
 }

}

// let max = new Gladiator ('Maximus', 'Trident')
// let titus = new Gladiator('Titus','Spear')
// let andronicus = new Gladiator('Andronicus','Club')