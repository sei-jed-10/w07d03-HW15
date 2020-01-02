class Arena {
constructor(name, gladiator)
    this.name = name 
    this.gladiator = gladiator;
}

addGladiator(gladiator) {
if (this.gladiators.length < 2) {
  this.gladiators.push(new Gladiator(gladiator));
}else{
  return 'there is Gladiators'
}
}