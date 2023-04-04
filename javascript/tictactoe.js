$('document').ready(function (){

    let turn = 'X';
    let result = '';
    let turnCount = 0;
    let XScore = 0;
    let OScore = 0;

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
    
    const determineWinner = function () {
        //Rows
        if (!result) {
            for (let i = 1; i <= 7; i += 3) {
                if (board[`box${i}`] === board[`box${i+1}`] && board[`box${i}`] === board[`box${i+2}`]) {
                    result = board[`box${i}`]
                    console.log(result)
                }  
            }
        }
        //Columns
        if (!result) {
            for (let i = 1; i <= 3; i += 1) {
                if (board[`box${i}`] === board[`box${i+3}`] && board[`box${i}`] === board[`box${i+6}`]) {
                    result = board[`box${i}`]
                    console.log(result)
                }
            }
        }
        //Diagonal
        if (!result) {
            if (board.box1 === board.box5 && board.box1 === board.box9 || board.box3 === board.box5 && board.box3 === board.box7) {
                result = board.box5
                console.log(result)
            }
        }
        //Draw
        if (!result && turnCount === 9) {
            result = 'draw'
            console.log('draw')
        }
        //Displays result and adds to score
        if (result) {
            let printedResult = $("<p>").attr('id','printedResult');
            if (result !== 'draw') {
                printedResult.html(`${result} WINS!`);
                $('header').append(printedResult);
            } else {
                printedResult.html(`DRAW!&#160;`);
                $('header').append(printedResult);
            }

            let resetButton = $("<button>").attr({role: 'button', class: 'button-85', id: 'resetButton'}).html('Play again?');
            $('header').append(resetButton)
            if (result === 'X') {
                XScore ++;
                $('#XScore').html(XScore.toString())
            } else if (result === 'O') {
                OScore ++;
                $('#OScore').html(OScore.toString())
            }
        }
    }
    
    //Function that allows user to place X or O on board
    $('#game-box').on('click', function(event) {
        let clickedBox = event.target.id;

        if (turnCount < 9 && !result && !board[clickedBox]) {
            if (turn === 'X') {
                board[clickedBox]= 'X'
                $(`#${clickedBox}`).addClass('x')
                turn = 'O'
                turnCount++
                determineWinner()
            } else if (turn === 'O') {
                board[clickedBox]= 'O'
                $(`#${clickedBox}`).addClass('o')
                turn = 'X'
                turnCount++
                determineWinner()
            } 
        }
    })

    //Allows user to go first as X or O
    $('#chooseX').on('click', function () {
        if (turnCount === 0) {
            turn = 'X';
        }
    })

    $('#chooseO').on('click', function () {
        if (turnCount === 0) {
        turn = 'O';
        }
    })

    //Button to reset board --- resetButton is added dynamically, so jQuery must retrieve the 'header in the first instance of loading the page.
    $('header').on('click', function (event){
        if (event.target.id === 'resetButton'){
            console.log('hello')
            for (let i = 1; i <= 9; i++) {
                board[`box${i}`] = ''
            }
            console.log(board)
            $('.grid-box').removeClass('o x');
            turn = 'X';
            result = '';
            turnCount = 0;
            resetButton.remove();
            $('#printedResult').remove();
        }
    })
})

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

  //Pos value is either X or O
    // These values can be changed on.(click), their value determines the class of a div, that will then determine whether the div shows an X or 0

    //When variable 'turn'==='player1' the next on.(click) changes the divs to an X, the same anonymous function will change the value of 'turn' to 'player2'

    //When variable 'turn'==='player2' the next on.(click) changes the divs to an O, the same anonymous function will change the value of 'turn' to 'player1'

    //How do we determine a result?
        // After every placement, a function will check through all possible permutations of 3 key value pairs in a line. If the function finds 3 equal values a result will be determined. (This can possibly be done with a for loop)

    //How do we decide who goes first?
        //  A button that on.('click', ...), changes the turn variable that decides whose turn it is.

//code im saving -->

 // if (turn === 'X' && turnCount < 9 && !result && !board[clickedBox]) {
        //     board[clickedBox]= 'X'
        //     $(`#${clickedBox}`).addClass('x')
        //     turn = 'O'
        //     turnCount++
        //     determineWinner()
        // } else if (turn === 'O' && turnCount < 9 && !result && !board[clickedBox]) {
        //     board[clickedBox]= 'O'
        //     $(`#${clickedBox}`).addClass('o')
        //     turn = 'X'
        //     turnCount++
        //     determineWinner()
        // }