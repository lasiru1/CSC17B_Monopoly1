/*
-Jail 
You land in Jail when...

Your token lands on the space marked "Go to Jail"
You draw a card marked "Go to Jail" or
You throw doubles three times in succession.


Throwing doubles on any of your next three turns. (if you succeed in doing this you immediately move forward the number of spaces shown by your doubles throw. Even though you had thrown doubles, you do not take another turn.)
Using a "Get Out of Jail Free Card"
Purchasing the "Get Out of Jail Free Card" from another player and playing it.
Paying a fine of $50 before you roll the dice on either of your next two turns.
If you do not throw doubles by your third turn, you must pay the $50 fine. You then get out of Jail and immediately move forward the number of spaces shown by your throw. (Even though you are in Jail, you may buy and sell property, buy and sell houses and hotels and collect rents.)
-Buying 

-Adding houses 

-Pausing the game 

-win conditions(20 rounds or when everyone else no money)


*/
function manipProperty(currPlayer,game){
    // trading to players?
}

function landOnTile(theproperty[tilenum],currPlayer,game){
    // lands on/pass go--- this should go in the player movement function
    // ^^^ not gonna be in this func
    
    //Lands on a Chance/ luxary or supertax/incomtax/ gotojail/jailtile
        // make propertie cards for these with the amount/ type
        // card types:
        // community card
        // chance card
        // toJail
        // jailTile
        // tax
        //make vec of strings of above
        //for types in typesvec
            //if property.type == types
                //individual if statements for the above
    
    // Lands on a property
        //check if owned by currplayer
            //nada

        //check if owned by none
            // Want to buy?
            //y/N
            // if Y
                //subtract money of the property from player if equal
                // give prop or do nada depending
            //else
                //nada

        //if else--means owned by someone else
            // make this a do while(player==active or playermoney<=propertiecost){}
                //make this check into a function
                // if property >0
                
                //else
                    //player active =false
                // make player sell properties
            //if active
                //subtract away the amount of the property
                //give total amount to the owner of the prop
            //else
                //subtract away the amount of the property
                //give difference(the nonneg part) to the owner of the prop
            
    
}

// ru
function inJail(currrolls,timeInJail){
    //if player has get out of jail free card
        //player loses get out of jail free card
        // isinjail=false
    // if rolls[0]=rolls[1] -- doubles
        // isinjail=false
        // then move the number of spaces of the rolls immediately
    // if time in Jail==3
        // isinjail=false
        // then move the number of spaces of the rolls immediately
    //else 
        //timein jail++
    
}
function gameOver(allPlayers, roundnumber){
    //for all players in allplayers
        //if properties = 0 and money==0 (or make a players.active)
            //nada
        //else
            //playersleft++
    //if playersleft ==1
        //game over
    //else
        //keep playing
    //if round number is =20
        //game over
    //if round numer<=20
        //keep playing
}