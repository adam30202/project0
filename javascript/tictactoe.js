
// HTML&CSS
    // Board is created with divs 
    // Changing the class of the div makes them display an X or O
    // Use on.('click', ...) on the div to change their class


// LOGIC
    // define a variable for both players 'player1' and 'player2'
    // define a variable name 'turn' thats value is either player1 or player2.
    // create an object that holds a key value pair for every position on the board
     const board = {
        pos1: null,
        pos2: null,
        pos3: null,
        pos4: null,
        pos5: null,
        pos6: null,
        pos7: null,
        pos8: null,
        pos9: null,
     }

     //Pos value is either X or O
    // These values can be changed on.(click), their value determines the class of a div, that will then determine whether the div shows an X or 0

    //When variable 'turn'==='player1' the next on.(click) changes the divs to an X, the same anonymous function will change the value of 'turn' to 'player2'

    //When variable 'turn'==='player2' the next on.(click) changes the divs to an O, the same anonymous function will change the value of 'turn' to 'player1'

    //How do we determine a winner?
        // After every placement, a function will check through all possible permutations of 3 key value pairs in a line. If the function finds 3 equal values a winner will be determined. (This can possibly be done with a for loop)

    //How do we decide who goes first?
        //  A button that on.('click', ...), changes the turn variable that decides whose turn it is.