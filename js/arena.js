class Arena {
    constructor(name) {
        this.name = name[0].toUpperCase() + name.substring(1); //Capitalize the name of the Arena.
        this.gladiators = []; //list of the gladiators in the arena.
        this.entertained = false; //it becomes 'true' if the gladiator with the name"Maximus" is in the fight.
    }

    //Methosd to add a gladiator to the arena.
    addGladiator(gladiator) {
        if (this.gladiators.length < 2) { //We have to check the number of gladiators in the arena as only a maximum of two gladiators can be present at the same time.
            (this.gladiators).push(gladiator);
            console.log(gladiator.name + " entered the arena.")
            if (gladiator.name == "Maximus") {
                this.entertained = true; //update the crowd entertainment status as the gladiator "Maximum" has entered the arena.
            }
        } else {
            console.log("Sorry, cannot add " + gladiator.name + " the arena can only have two gladiators at the same time.") //Display an error message if the arena has already two gladiators.

        }
    }

    fight() {
        console.log("The fight has started");
        var winner;
        var loser;
        if (this.gladiators.length == 2) { //if there are two gladiators in the arena.
            var firstGladiator = this.gladiators[0]; //assigned them to variables to provide simple reference and ease the code reading process.
            var secondGladiator = this.gladiators[1];
            console.log("Gladiators: " + firstGladiator.name + ", " + secondGladiator.name);


            //-----------------------------------------------------------------------------------------------------------------------------------------

            //Case1: a gladiator named "Maximus" is present in the fight, he wins.
            if (firstGladiator.name == 'Maximus' || secondGladiator.name == 'Maximus') {
                var MaximusIndex = this.getGladiatorIndex('Maximus'); //get the index of 'Maximus'
                if (MaximusIndex == 0) { //get the index of the other gladiator in the arena.
                    var loserIndex = 1
                } else {
                    var loserIndex = 0;
                }
                winner = this.gladiators[MaximusIndex]; //set Maximus as the winner.
                loser = this.gladiators[loserIndex]; //eleminate the other gladiator.
            }


            //-----------------------------------------------------------------------------------------------------------------------------------------

            //Case 2: both gladiators are carrying the same weapon.
            else if (firstGladiator.weapon == secondGladiator.weapon) {
                console.log("Both gladiators are carrying the same weapon\n" + firstGladiator.name + " and " + secondGladiator.name + " have been eliminated.")
                this.gladiators.length = 0; //both gladiators will be eliminated.

            }

            //-----------------------------------------------------------------------------------------------------------------------------------------
            else {
                var result = (this.getWinner(firstGladiator, secondGladiator));
                winner = result[0];
                loser = result[1];

            }

            if (this.gladiators.length != 0) {
                console.log("Winner is " + winner.name);
                this.eliminateLoser(loser);
            }

        } //end of outer if statement.
        else { //There are not enough gladiators in the arena.
            console.log("Sorry, two gladiators must be present in the arena for a fight to start.")
        }


    }



    //eliminateLoser(loser) method gets the user involved in choosing wether or not the loser of the fight gets eliminated.
    eliminateLoser(loser) {
        do {
            var userVote = prompt("Please vote for " + loser.name + "\nwith thumbs down (D) to approve their elimination or thumbs up (U)");
            var checkedVote = this.checkElminationVote(userVote);
        }
        //If the user entered anything other than the letters 'd' or 'u' regardless of the case sensitivity. 
        while (checkedVote == "error");
        if (checkedVote == false) { //if the user voted with thumbs down, the loser gets eliminated.
            console.log(loser.name + " has been eliminated.")
            this.removeGladiator(loser.name); //remove the gladiator from the arena.

        }

    }

    getWinner(firstGladiator, secondGladiator) {
        //For the fight results, we will use an array to push the results to.
        //the first element of the array will hold a reference to the winner.
        //while the second element will have a reference to the loser.
        var result = [];

        if (firstGladiator.weapon == "Trident" && secondGladiator.weapon == "Spear") {
            result.push(firstGladiator); //winner
            result.push(secondGladiator); //loser
        } else if (firstGladiator.weapon == "Spear" && secondGladiator.weapon == "Club") {
            result.push(firstGladiator); //winner
            result.push(secondGladiator); //loser
        } else if (firstGladiator.weapon == "Club" && secondGladiator.weapon == "Traident") {
            result.push(firstGladiator); //winner
            result.push(secondGladiator); //loser
        }

        //------------------------------------------------------------------------------------

        else if (secondGladiator.weapon == "Trident" && firstGladiator.weapon == "Spear") {
            result.push(secondGladiator); //winner
            result.push(firstGladiator); //loser
        } else if (secondGladiator.weapon == "Spear" && firstGladiator.weapon == "Club") {
            result.push(secondGladiator); //winner
            result.push(firstGladiator); //loser
        } else if (secondGladiator.weapon == "Club" && firstGladiator.weapon == "Traident") {
            result.push(secondGladiator); //winner
            result.push(firstGladiator); //loser
        }

        return result;
    } //end of get winner method.


    //method that takes the gladiator's name as an input and returns the index of that gladiator in the arena's list of gladiators.
    getGladiatorIndex(gladiatorName) {
        var index;
        for (var i = 0; i < this.gladiators.length; i++) {
            if (this.gladiators[i].name == gladiatorName) {
                index = i;
            }
        }
        return index;

    }

    //method that removes the gladiator by name.
    removeGladiator(gladiatorName) {
        var index = this.getGladiatorIndex(gladiatorName); //use getGladiatorIndex(gladiatorName) method to get the index first 
        this.removebyIndex(index); //after getting the value of the index where the gladiator is avaliable within the array, we can call removebyIndex(index) to remove them.

    }

    //a method that remove the gladiator from the arena's array of gladiators, using the index (after getting it by name from removeGladiator method)
    removebyIndex(index) {
        if (index == 0) {
            this.gladiators.shift(); //if the gladiator is the first in the arena.
        } else {
            this.gladiators.pop(); //if the gladiator is the second one in the arena.
        }
    }

    // checkElminationVote(userInput)method checks the user's vote for eliminating the loser from the arena.
    checkElminationVote(userInput) {
        if (userInput == null) { //If the user clicked on the 'Cancel' button of the promted message.
            return false; //take that as thumbs down 
            //(if no action is taken, the 'null' value will result in an error since it can't be interpreted bt the other method that invokes this one)
        }

        if (userInput.toUpperCase() == 'U') { //thumbs up
            return true;
        } else if (userInput.toUpperCase() == 'D') { //thumbs down.
            return false;
        } else {
            return "error" //the user has entered a value other than the characters 'D' or 'U'
        }
    }

    // a method that returns wether or not the crowd is entertained.
    entertained() {
        return this.entertained;
    }
}