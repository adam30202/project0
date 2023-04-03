
// HTML&CSS
    // Board is created with divs 
    // Changing the class of the div makes them display an X or O
    // Use on.('click', ...) on the div to change their class
      // define a variable for both players 'player1' and 'player2'
        // define a variable name 'turn' thats value is either player1 or player2.
        // create an object that holds a key value pair for every position on the board


    // const player1 = x;
    // const player2 = o;

// LOGIC
const determineWinner = function () {
    //Rows
    if (!winner) {
        for (let i = 1; i <= 7; i + 3) {
            if (board[`box${i}`] === board[`box${i+1}`] && board[`box${i}`] === board[`box${i+2}`]) {
                winner = board[`box${i}`]
                console.log(winner)
            }  
        }
    }

    //Columns
    if (!winner) {
        for (let i = 1; i <= 3; i + 1) {
            if (board[`box${i}`] === board[`box${i+3}`] && board[`box${i}`] === board[`box${i+6}`]) {
                winner = board[`box${i}`]
                console.log(winner)
            }
    }
    //Diagonal
    if (!winner) {
            if (board.box1 === board.box5 && board.box1 === board.box9 || board.box3 === board.box5 && board.box3 === board.box7) {
                winner = board.box5
                console.log(winner)
            }
        }
    }  
}

$('document').ready(function (){

    let turn = 'X';
    let winner = ''
           
        const board = {
            box1: '',
            box2: '',
            box3: '',
            box4: '',
            box5: '',
            box6: '',
            box7: '',
            box8: '',
            box9: '',
        };
    
    
    $('#game-box').on('click', function(event) {
        let clickedBox = event.target.id;

        if (turn === 'X') {
            board[clickedBox]= 'X'
            $(`#${clickedBox}`).addClass('x')
            turn = 'O'

        } else if (turn === 'O') {
            board[clickedBox]= 'O'
            $(`#${clickedBox}`).addClass('o')
            turn = 'X'

        }
        determineWinner()
    })

    
    

     //Pos value is either X or O
    // These values can be changed on.(click), their value determines the class of a div, that will then determine whether the div shows an X or 0

    //When variable 'turn'==='player1' the next on.(click) changes the divs to an X, the same anonymous function will change the value of 'turn' to 'player2'

    //When variable 'turn'==='player2' the next on.(click) changes the divs to an O, the same anonymous function will change the value of 'turn' to 'player1'

    //How do we determine a winner?
        // After every placement, a function will check through all possible permutations of 3 key value pairs in a line. If the function finds 3 equal values a winner will be determined. (This can possibly be done with a for loop)

    //How do we decide who goes first?
        //  A button that on.('click', ...), changes the turn variable that decides whose turn it is.

})